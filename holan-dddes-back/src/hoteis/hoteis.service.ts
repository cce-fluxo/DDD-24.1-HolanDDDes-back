/* eslint-disable prettier/prettier */
import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatehotelDto } from './dto/create-hotei.dto';
import { UpdatehotelDto } from './dto/update-hotei.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class hotelsService {
  constructor(private prisma: PrismaService) {}
  
  // Automatizando a adição de hotéis pelo FRONT
  // com essa function não preciso fazer mais nada de adicional no FRONT
  async getProprietarioId(userId: number) {
    try {
      const proprietario = await this.prisma.proprietario.findFirst({
        where: { usuarioId: userId },
      });
      if (!proprietario) {
        throw new BadRequestException('Usuário não encontrado.');
      }

      return proprietario.id;
    } catch (error) {
      throw new HttpException(`Erro ao buscar o proprietário: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // hotelId para as fotos virem no meu GET
  async getHotelId(userId: number) {
    try {
      const proprietarioId = await this.getProprietarioId(userId);
      const hotel = await this.prisma.hotel.findFirst({
        where: { proprietarioId: proprietarioId },
    });
    if (!hotel) {
      throw new BadRequestException('Usuário não encontrado.');
    }

    return hotel.id;
    } catch (error) {
      throw new HttpException(`Erro ao buscar o proprietário: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  async create(createhotelDto: CreatehotelDto, userId: number) {
    try {
      const proprietarioId = await this.getProprietarioId(userId);

      const Criarhotel = this.prisma.hotel.create({
        data: {
          ...createhotelDto,
          proprietarioId: proprietarioId // Adiciona o proprietário ao hotel pelo req.user.id
        }
      });
      return Criarhotel;
    } catch (error) {
      console.error('Erro ao enviar ao banco de dados:', error); 
    }
  }

  // Encontrando todos os hotéis (será útil para o APP)
  findAll(findAllhotelDto: any) {
    const AcharTodoshotels = this.prisma.hotel.findMany({
      where: findAllhotelDto,
    });
    return AcharTodoshotels;
  }

  // Encontrando um hotel específico (será útil para resgatar no APP e no SW)
  async findOne(userId: number) {
    // Achando a id do proprietário
    const proprietarioId = await this.getProprietarioId(userId);
    const hotelId = await this.getHotelId(userId);

    const hotel = await this.prisma.hotel.findUnique({where: {proprietarioId: proprietarioId}});

    // Encontrando todas as fotos do hotel
    const foto_hotel = await this.prisma.fotosHotel.findMany({where: {hotelId: hotelId}})

    // Retornando o hotel e das fotos do hotel do proprietário
    return { hotel, foto_hotel }
  }

  async update(userId: number, UpdatehotelDto: UpdatehotelDto) {
    const hotel = this.prisma.hotel.update({
      where: {id: userId},
      data: UpdatehotelDto,
    })
    return hotel
  }

  async remove(id: number) {
    return await this.prisma.hotel.delete({where: {id}});
  }

  findAcomodacoes(id: number) {
    return this.prisma.hotel.findMany({
      where: {id},
      select: {Acomodacao: true},
    })
  }

  // Método para buscar comodidades de um hotel
  async getComodidadesByHotel(userId: number) {
    const hotelId = await this.getHotelId(userId);
    return await this.prisma.hotel.findUnique({
      where: {id: hotelId},
      select: { Comodidade: true }
    });
  }

  // Método para atrelar uma comodidade em um hotel
  async createComodidadeHotel(userId: number, comodidadeId: number[]) {
    const hotelId = await this.getHotelId(userId);
    return await this.prisma.hotel.update({
      where: { id: hotelId },
      data: {
        Comodidade: {
          connect: comodidadeId.map(id => ({ id })),  // Conecta as comodidades ao hotel
        },
      },
    });
  }

  // Método para resgatar uma comodidade específica de um hotel
  async findComodidade(hotelId: number, comodidadeId: number) {
    return await this.prisma.hotel.findUnique({
      where: { id: hotelId },
      select: {
        Comodidade: {
          where: { id: comodidadeId },
        },
      },
    });
  }

  //Método para remover uma comodidade de um hotel
  async removeComodidade(hotelId: number, comodidadeId: number) {
    return await this.prisma.hotel.update({
      where: { id: hotelId },
      data: {
        Comodidade: {
          disconnect: { id: comodidadeId },
        },
      },
    });
  }

  async findHotelByUserId(userId: number) {
    return await this.prisma.hotel.findFirst({
      where: {
        Proprietario: {
          usuarioId: userId,
        },
      },
      include: {
        Proprietario: true,
      },
    });
  }

  findFoto(id:number) {
    return this.prisma.hotel.findMany({
      where: {id},
      select: {FotosHotel: true},
    })
  }

  findAvaliacoes(id:number) {
    return this.prisma.hotel.findMany({
      where: {id},
      select: {Avaliacao: true},
    })
  }
  
  // Método para buscar as informações do hotel
  async getHotelaria(userId: number) {
    // Achando a id do proprietário e do hotel
    const proprietarioId = await this.getProprietarioId(userId);
    const hotelId = await this.getHotelId(userId);

    // Achando as informações do hotel
    const hotel = await this.prisma.hotel.findUnique({where: {proprietarioId: proprietarioId}});

    // Encontrando todas as fotos do hotel
    const foto_hotel = await this.prisma.fotosHotel.findMany({where: {hotelId: hotelId}})

    // Encontrando todas as acomodações de um hotel
    const acomodacoes = await this.prisma.hotel.findMany({
      where: {id: hotelId},
      select: {Acomodacao: true},
    })

    // Encontrando todas as comodidades do hotel
    const comodidades = await this.prisma.hotel.findUnique({
      where: {id: hotelId},
      select: { Comodidade: true }
    });

    // Encontrando todas as avaliacoes do hotel
    const avaliacoes  = await this.prisma.hotel.findMany({
      where: {id: hotelId},
      select: {Avaliacao: true},
    })

    // Retornando o hotel e das fotos do hotel do proprietário
    return { hotel, foto_hotel, acomodacoes, comodidades, avaliacoes }
  }
}

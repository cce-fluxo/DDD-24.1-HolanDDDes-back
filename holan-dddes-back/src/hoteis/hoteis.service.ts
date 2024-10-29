/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreatehotelDto } from './dto/create-hotei.dto';
import { UpdatehotelDto } from './dto/update-hotei.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class hotelsService {
  constructor(private prisma: PrismaService) {}
  create(createhotelDto: CreatehotelDto) {
    try {
      const Criarhotel = this.prisma.hotel.create({
        data: createhotelDto,
      });
      return Criarhotel;
    } catch (error) {
      console.error('Erro ao enviar ao banco de dados:', error); 
    }
  }

  findAll(findAllhotelDto: any) {
    const AcharTodoshotels = this.prisma.hotel.findMany({
      where: findAllhotelDto,
    });
    return AcharTodoshotels;
  }

  async findOne(id: number) {
    return await this.prisma.hotel.findUnique({where: {id}});
  }

  update(id: number, UpdatehotelDto: UpdatehotelDto) {
    const hotel = this.prisma.hotel.update({
      where: {id},
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
  async getComodidadesByHotel(hotelId: number) {
    return await this.prisma.hotel.findUnique({
      where: {id: hotelId},
      select: { Comodidade: true }
    });
  }

  // Método para atrelar uma comodidade em um hotel
  async createComodidadeHotel(hotelId: number, comodidadeId: number) {
    return await this.prisma.hotel.update({
      where: { id: hotelId },
      data: {
        Comodidade: {
          connect: { id: comodidadeId }, 
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
}

import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AvaliacaoService {
  constructor(private prisma: PrismaService) {}
  create(createAvaliacaoDto: CreateAvaliacaoDto) {
    const CriarAvaliacao = this.prisma.avaliacao.create({
      data: createAvaliacaoDto,
    });
    return CriarAvaliacao;
  }

  findAll(findAllAvaliacaoDto: any) {
    const BuscarAvaliacao = this.prisma.avaliacao.findMany({
      where: findAllAvaliacaoDto,
    });
    return BuscarAvaliacao;
  }

  // async findOne(id: number) {
  //   return await this.prisma.avaliacao.findUnique({
  //     where: {id}
  //   });
  // }


  update(id: number, UpdateAvaliacaoDto: UpdateAvaliacaoDto) {
    const avaliacao = this.prisma.avaliacao.update({
      where: {id},
      data: UpdateAvaliacaoDto,
    })
    return avaliacao;
  }

  async remove(id: number) {
    return await this.prisma.avaliacao.delete({where: {id}});
  }

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

  async findAvaliacao(acomodacaoId: any) {
    // Faz uma consulta no banco de dados para encontrar uma acomodação com o ID especificado
    const acomodacao = await this.prisma.acomodacao.findUnique({
      where: { id: acomodacaoId }, // Busca a acomodação com base no ID fornecido
      include: { Avaliacao_acomodacao: true }, // Inclui as avaliações associadas à acomodação
    });

    // Retorna a acomodação e todas as suas avaliações
    return acomodacao;
  }

  async getAvaliacoes(userId: number) {
    // pega o id do hotel do usuario
    const hotelId = await this.getHotelId(userId);

    // Encontrando todas as acomodações do hotel
    const acomodacoes = await this.prisma.hotel.findMany({
      where: {id: hotelId},
      select: {Acomodacao: true},
    })

    // Encontrando todas as avaliações das acomodacação que um hotel tem
    const avaliacoes_acomodacoes = await this.prisma.hotel.findMany({
      where: {id: hotelId},
      select: {Acomodacao: 
        {select: {Avaliacao_acomodacao: true}
      }
    }})

    // Encontrando os clientes qeu fizeram as avaliações
    const cliente_avaliacao = await this.prisma.hotel.findMany({
      where: {id: hotelId},
      select: {Acomodacao: {select: {Avaliacao_acomodacao: {select: {cliente: true}}}}
    }})

    // Encontrando os usuarios qeu fizeram as avaliações
    const usuario_avaliacao = await this.prisma.hotel.findMany({
      where: {id: hotelId},
      select: {Acomodacao: {select: {Avaliacao_acomodacao: {select: {cliente: {select: {usuario: true}}}}}}
    }})

    // Encontrando todas as avaliações das acomodacação que um hotel tem
    const foto_usuario = await this.prisma.hotel.findMany({
      where: {id: hotelId},
      select: {Acomodacao: 
        {select: {Avaliacao_acomodacao: {select: {cliente: {select: {usuario: {select: {FotoUsuario: true}}}}}}}}}})

    return {avaliacoes_acomodacoes, acomodacoes, cliente_avaliacao,  usuario_avaliacao, foto_usuario}
  }
}

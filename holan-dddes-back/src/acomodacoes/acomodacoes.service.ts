/* eslint-disable prettier/prettier */
import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAcomodacoeDto } from './dto/create-acomodacoe.dto';
import { UpdateAcomodacoeDto } from './dto/update-acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AcomodacoesService {
  constructor(private prisma: PrismaService) {}

    // Automatizando a adição de acomodações pelo FRONT
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

  async getHotelId(userId: number) {
    try {
      const hotel = await this.prisma.hotel.findFirst({
        where: { proprietarioId: await this.getProprietarioId(userId) },
      });
      if (!hotel) {
        throw new BadRequestException('Usuário não está associado a nenhum hotel.');
      }

      return hotel.id;
    } catch (error) {
      throw new HttpException(`Erro ao buscar o hotel: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Atrelando a criação de acomodação ao hotelId 
  async create(createAcomodacoeDto: CreateAcomodacoeDto, userId: number) {
    try {
      const hotelId = await this.getHotelId(userId);
      const CriarAcomodacao = this.prisma.acomodacao.create({
        data: {
          ...createAcomodacoeDto, // dto requerido
          hotelId: hotelId, // Adiciona o hotel ao acomodacao pelo req.user.id
        }
      });
      return CriarAcomodacao;
    } catch (error) {
      console.error('Erro ao enviar ao banco de dados:', error); 
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

  async findFoto(acomodacaoId: any) {
    // Faz uma consulta no banco de dados para encontrar uma acomodação com o ID especificado
    const acomodacao = await this.prisma.acomodacao.findUnique({
      where: { id: acomodacaoId }, // Busca a acomodação com base no ID fornecido
      include: { FotoAcomodacao: true }, // Inclui as fotos associadas à acomodação
    });

    // Retorna a acomodação e todas as suas avaliações
    return acomodacao;
  }

  async findComodidade(acomodacaoId: any) {
    // Faz uma consulta no banco de dados para encontrar uma acomodação com o ID especificado
    const acomodacao = await this.prisma.acomodacao.findUnique({
      where: { id: acomodacaoId }, // Busca a acomodação com base no ID fornecido
      include: { ComodidadeAcomodacao: true }, // Inclui as comodidades associadas à acomodação
    });

    // Retorna a acomodação e todas as suas avaliações
    return acomodacao;
  }

  // Encontrar todas as acomodações  
  async findAll(userId: number) {
    const hotelId = await this.getHotelId(userId);
    const AcharTodasAcomodacoes = this.prisma.acomodacao.findMany({
      where: { hotelId: hotelId }, // acha pela id do hotel
    });
    return AcharTodasAcomodacoes;
  }

  findOne(findOneAcomodacoeDto: any) {
    const AcharUmaAcomodacao = this.prisma.acomodacao.findUnique({
      where: findOneAcomodacoeDto,
    });
    return AcharUmaAcomodacao;
  }

  update(id: number, UpdateAcomodacoeDto: UpdateAcomodacoeDto) {
    const acomodacao = this.prisma.acomodacao.update({
      where: {id},
      data: UpdateAcomodacoeDto,
    })
    return acomodacao;
  }

  remove(DeleteAcomodacoeDto: any) {
    const DeletarAcomodacao = this.prisma.acomodacao.delete({
      where: DeleteAcomodacoeDto,
    });
    return DeletarAcomodacao;
  }
}

import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateDescricaoDetalhadaDto } from './dto/create-descricao_detalhada.dto';
import { UpdateDescricaoDetalhadaDto } from './dto/update-descricao_detalhada.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class DescricaoDetalhadaService {
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
      throw new HttpException(
        `Erro ao buscar o proprietário: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getHotelId(userId: number) {
    try {
      const hotel = await this.prisma.hotel.findFirst({
        where: { proprietarioId: await this.getProprietarioId(userId) },
      });
      if (!hotel) {
        throw new BadRequestException(
          'Usuário não está associado a nenhum hotel.',
        );
      }

      return hotel.id;
    } catch (error) {
      throw new HttpException(
        `Erro ao buscar o hotel: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async create(
    createDescricaoDetalhadaDto: CreateDescricaoDetalhadaDto,
    userId: number,
  ) {
    const hotelId = await this.getHotelId(userId);
    const CriarDescricaoDetalhada = this.prisma.descricao_detalhada.create({
      data: { ...createDescricaoDetalhadaDto, hotelId: hotelId },
    });
    return CriarDescricaoDetalhada;
  }

  findAll(findAllDescricaoDetalhadaDto: any) {
    const AcharTodasDescricaoDetalhadas =
      this.prisma.descricao_detalhada.findMany({
        where: findAllDescricaoDetalhadaDto,
      });
    return AcharTodasDescricaoDetalhadas;
  }

  async findOne(id: number) {
    return await this.prisma.descricao_detalhada.findUnique({ where: { id } });
  }

  update(id: number, UpdateDescricaoDetalhadaDto: UpdateDescricaoDetalhadaDto) {
    const descricaoDetalhada = this.prisma.descricao_detalhada.update({
      where: { id },
      data: UpdateDescricaoDetalhadaDto,
    });
    return descricaoDetalhada;
  }

  async remove(id: number) {
    return await this.prisma.descricao_detalhada.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateDescricaoDetalhadaDto } from './dto/create-descricao_detalhada.dto';
import { UpdateDescricaoDetalhadaDto } from './dto/update-descricao_detalhada.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class DescricaoDetalhadaService {
  constructor(private prisma: PrismaService) {}
  create(createDescricaoDetalhadaDto: CreateDescricaoDetalhadaDto) {
    const CriarDescricaoDetalhada = this.prisma.descricao_detalhada.create({
      data: createDescricaoDetalhadaDto,
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
    return await this.prisma.descricao_detalhada.findUnique({where: {id}});
  }

  update(id: number, UpdateDescricaoDetalhadaDto: UpdateDescricaoDetalhadaDto) {
    const descricaoDetalhada = this.prisma.descricao_detalhada.update({
      where: {id},
      data: UpdateDescricaoDetalhadaDto,
    })
    return descricaoDetalhada
  }

  async remove(id: number) {
    return await this.prisma.descricao_detalhada.delete({where: {id}});
  }
}

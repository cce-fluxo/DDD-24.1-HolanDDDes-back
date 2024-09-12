import { Injectable } from '@nestjs/common';
import { CreateDescricaoDetalhadaDto } from './dto/create-descricao_detalhada.dto';
import { UpdateDescricaoDetalhadaDto } from './dto/update-descricao_detalhada.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class DescricaoDetalhadaService {
  constructor(private prisma: PrismaService) {}
  create(createDescricaoDetalhadaDto: CreateDescricaoDetalhadaDto) {
    const CriarDescricaoDetalhada = this.prisma.descricaoDetalhada.create({
      data: createDescricaoDetalhadaDto,
    });
    return CriarDescricaoDetalhada;
  }

  findAll(findAllDescricaoDetalhadaDto: any) {
    const AcharTodasDescricaoDetalhadas =
      this.prisma.descricaoDetalhada.findMany({
        where: findAllDescricaoDetalhadaDto,
      });
    return AcharTodasDescricaoDetalhadas;
  }

  findOne(findOneDescricaoDetalhadaDto: any) {
    const AcharUmaDescricaoDetalhada =
      this.prisma.descricaoDetalhada.findUnique({
        where: findOneDescricaoDetalhadaDto,
      });
    return AcharUmaDescricaoDetalhada;
  }

  update(p0: number, updateDescricaoDetalhadaDto: UpdateDescricaoDetalhadaDto) {
    const AtualizarDescricaoDetalhada = this.prisma.descricaoDetalhada.update({
      where: { id: updateDescricaoDetalhadaDto.id },
      data: updateDescricaoDetalhadaDto,
    });
    return AtualizarDescricaoDetalhada;
  }

  remove(deleteDescricaoDetalhadaDto: any) {
    const DeletarDescricaoDetalhada = this.prisma.descricaoDetalhada.delete({
      where: deleteDescricaoDetalhadaDto,
    });
    return DeletarDescricaoDetalhada;
  }
}

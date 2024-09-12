import { Injectable } from '@nestjs/common';
import { CreateTipoAcomodacoeDto } from './dto/create-tipo_acomodacoe.dto';
import { UpdateTipoAcomodacoeDto } from './dto/update-tipo_acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class TipoAcomodacoesService {
  constructor(private prisma: PrismaService) {}
  create(createTipoAcomodacoeDto: CreateTipoAcomodacoeDto) {
    const CriarTipoAcomodacoe = this.prisma.tipoAcomodacoe.create({
      data: createTipoAcomodacoeDto,
    });
    return CriarTipoAcomodacoe;
  }

  findAll(findAllTipoAcomodacoeDto: any) {
    const AcharTodasTipoAcomodacoes = this.prisma.tipoAcomodacoe.findMany({
      where: findAllTipoAcomodacoeDto,
    });
    return AcharTodasTipoAcomodacoes;
  }

  findOne(findOneTipoAcomodacoeDto: any) {
    const AcharUmTipoAcomodacoe = this.prisma.tipoAcomodacoe.findUnique({
      where: findOneTipoAcomodacoeDto,
    });
    return AcharUmTipoAcomodacoe;
  }

  update(p0: number, updateTipoAcomodacoeDto: UpdateTipoAcomodacoeDto) {
    const AtualizarTipoAcomodacoe = this.prisma.tipoAcomodacoe.update({
      where: { id: updateTipoAcomodacoeDto.id },
      data: updateTipoAcomodacoeDto,
    });
    return AtualizarTipoAcomodacoe;
  }

  remove(deleteTipoAcomodacoeDto: any) {
    const DeletarTipoAcomodacoe = this.prisma.tipoAcomodacoe.delete({
      where: deleteTipoAcomodacoeDto,
    });
    return DeletarTipoAcomodacoe;
  }
}

import { Injectable } from '@nestjs/common';
import { CreatetipoAcomodacaoDto } from './dto/create-tipo_acomodacoe.dto';
import { UpdatetipoAcomodacaoDto } from './dto/update-tipo_acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class tipoAcomodacaosService {
  constructor(private prisma: PrismaService) {}
  create(createtipoAcomodacaoDto: CreatetipoAcomodacaoDto) {
    const CriartipoAcomodacao = this.prisma.tipoAcomodacao.create({
      data: createtipoAcomodacaoDto,
    });
    return CriartipoAcomodacao;
  }

  findAll(findAlltipoAcomodacaoDto: any) {
    const AcharTodastipoAcomodacaos = this.prisma.tipoAcomodacao.findMany({
      where: findAlltipoAcomodacaoDto,
    });
    return AcharTodastipoAcomodacaos;
  }

  findOne(findOnetipoAcomodacaoDto: any) {
    const AcharUmtipoAcomodacao = this.prisma.tipoAcomodacao.findUnique({
      where: findOnetipoAcomodacaoDto,
    });
    return AcharUmtipoAcomodacao;
  }

  update(id: number, updateTipoAcomodacaoDto: UpdatetipoAcomodacaoDto) {
    const tipoAcomodacao = this.prisma.tipoAcomodacao.update({
      where: {id},
      data: updateTipoAcomodacaoDto,
    })
    return tipoAcomodacao
  }

  remove(deletetipoAcomodacaoDto: any) {
    const DeletartipoAcomodacao = this.prisma.tipoAcomodacao.delete({
      where: deletetipoAcomodacaoDto,
    });
    return DeletartipoAcomodacao;
  }
}

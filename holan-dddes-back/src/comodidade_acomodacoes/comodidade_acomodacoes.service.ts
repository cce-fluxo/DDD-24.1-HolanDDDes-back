/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateComodidadeAcomodacoeDto } from './dto/create-comodidade_acomodacoe.dto';
import { UpdateComodidadeAcomodacoeDto } from './dto/update-comodidade_acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ComodidadeAcomodacoesService {
  constructor(private prisma: PrismaService) {}
  create(createComodidadeAcomodacoeDto: CreateComodidadeAcomodacoeDto) {
    const CriarComodidadeAcomodacoe = this.prisma.comodidadeAcomodacao.create({
      data: createComodidadeAcomodacoeDto,
    });
    return CriarComodidadeAcomodacoe;
  }

  findAll(findAllComodidadeAcomodacoeDto: any) {
    const AcharTodasComodidadesAcomodacoes =
      this.prisma.comodidadeAcomodacao.findMany({
        where: findAllComodidadeAcomodacoeDto,
      });
    return AcharTodasComodidadesAcomodacoes;
  }

  async findOne(id: number) {
    return await this.prisma.comodidadeAcomodacao.findUnique({where: {id}});
  }

  update(id: number, UpdateComodidadeAcomodacoeDto: UpdateComodidadeAcomodacoeDto) {
    const comodidadeAcomodacao = this.prisma.comodidadeAcomodacao.update({
      where: {id},
      data: UpdateComodidadeAcomodacoeDto,
    })
    return comodidadeAcomodacao;
  }

  remove(deleteComodidadeAcomodacoeDto: any) {
    const DeletarComodidadeAcomodacoe = this.prisma.comodidadeAcomodacao.delete(
      {
        where: deleteComodidadeAcomodacoeDto,
      },
    );
    return DeletarComodidadeAcomodacoe;
  }
}

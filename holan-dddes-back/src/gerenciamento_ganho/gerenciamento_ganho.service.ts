import { Injectable } from '@nestjs/common';
import { CreateGerenciamentoGanhoDto } from './dto/create-gerenciamento_ganho.dto';
import { UpdateGerenciamentoGanhoDto } from './dto/update-gerenciamento_ganho.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class GerenciamentoGanhoService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGerenciamentoGanhoDto: CreateGerenciamentoGanhoDto) {
    const criarGerenciamentoGanho = this.prisma.gerenciamento_ganhos.create({
      data: createGerenciamentoGanhoDto,
    });
    return criarGerenciamentoGanho;
  }

  findAll(findAllGerenciamentoGanhoDto: any) {
    const acharTodasGerenciamentoGanhos =
      this.prisma.gerenciamento_ganhos.findMany({
        where: findAllGerenciamentoGanhoDto,
      });
    return acharTodasGerenciamentoGanhos;
  }

  findOne(findOneGerenciamentoGanhoDto: any) {
    const acharUmGerenciamentoGanho = this.prisma.gerenciamento_ganhos.findUnique(
      {
        where: findOneGerenciamentoGanhoDto,
      },
    );
    return acharUmGerenciamentoGanho;
  }

  update(id: number, UpdateGerenciamentoGanhoDto: UpdateGerenciamentoGanhoDto) {
    const gerenciamentoGanho = this.prisma.gerenciamento_ganhos.update({
      where: {id},
      data: UpdateGerenciamentoGanhoDto,
    })
    return gerenciamentoGanho
  }

  remove(deleteGerenciamentoGanhoDto: any) {
    const deletarGerenciamentoGanho = this.prisma.gerenciamento_ganhos.delete({
      where: deleteGerenciamentoGanhoDto,
    });
    return deletarGerenciamentoGanho;
  }
}

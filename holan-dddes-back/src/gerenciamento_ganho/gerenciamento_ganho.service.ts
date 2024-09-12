import { Injectable } from '@nestjs/common';
import { CreateGerenciamentoGanhoDto } from './dto/create-gerenciamento_ganho.dto';
import { UpdateGerenciamentoGanhoDto } from './dto/update-gerenciamento_ganho.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class GerenciamentoGanhoService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGerenciamentoGanhoDto: CreateGerenciamentoGanhoDto) {
    const criarGerenciamentoGanho = this.prisma.gerenciamentoGanho.create({
      data: createGerenciamentoGanhoDto,
    });
    return criarGerenciamentoGanho;
  }

  findAll(findAllGerenciamentoGanhoDto: any) {
    const acharTodasGerenciamentoGanhos =
      this.prisma.gerenciamentoGanho.findMany({
        where: findAllGerenciamentoGanhoDto,
      });
    return acharTodasGerenciamentoGanhos;
  }

  findOne(findOneGerenciamentoGanhoDto: any) {
    const acharUmGerenciamentoGanho = this.prisma.gerenciamentoGanho.findUnique(
      {
        where: findOneGerenciamentoGanhoDto,
      },
    );
    return acharUmGerenciamentoGanho;
  }

  update(p0: number, updateGerenciamentoGanhoDto: UpdateGerenciamentoGanhoDto) {
    const atualizarGerenciamentoGanho = this.prisma.gerenciamentoGanho.update({
      where: { id: updateGerenciamentoGanhoDto.id },
      data: updateGerenciamentoGanhoDto,
    });
    return atualizarGerenciamentoGanho;
  }

  remove(deleteGerenciamentoGanhoDto: any) {
    const deletarGerenciamentoGanho = this.prisma.gerenciamentoGanho.delete({
      where: deleteGerenciamentoGanhoDto,
    });
    return deletarGerenciamentoGanho;
  }
}

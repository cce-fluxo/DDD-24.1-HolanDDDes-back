import { Injectable } from '@nestjs/common';
import { CreateGerenciamentoGanhoAcomodacaoDto } from './dto/create-gerenciamento_ganho_acomodacao.dto';
import { UpdateGerenciamentoGanhoAcomodacaoDto } from './dto/update-gerenciamento_ganho_acomodacao.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class GerenciamentoGanhoAcomodacaoService {
  constructor(private readonly prisma: PrismaService) {}
  create(
    createGerenciamentoGanhoAcomodacaoDto: CreateGerenciamentoGanhoAcomodacaoDto,
  ) {
    const criarGerenciamentoGanhoAcomodacao =
      this.prisma.gerenciamento_ganhos_acomodacao.create({
        data: createGerenciamentoGanhoAcomodacaoDto,
      });
    return criarGerenciamentoGanhoAcomodacao;
  }

  findAll(findAllGerenciamentoGanhoAcomodacaoDto: any) {
    const acharTodasGerenciamentoGanhoAcomodacoes =
      this.prisma.gerenciamento_ganhos_acomodacao.findMany({
        where: findAllGerenciamentoGanhoAcomodacaoDto,
      });
    return acharTodasGerenciamentoGanhoAcomodacoes;
  }

  async findOne(id: number) {
    return await this.prisma.gerenciamento_ganhos_acomodacao.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    UpdateGerenciamentoGanhoAcomodacaoDto: UpdateGerenciamentoGanhoAcomodacaoDto,
  ) {
    const gerenciamento = this.prisma.gerenciamento_ganhos_acomodacao.update({
      where: { id },
      data: UpdateGerenciamentoGanhoAcomodacaoDto,
    });
    return gerenciamento;
  }

  async remove(id: number) {
    return await this.prisma.gerenciamento_ganhos_acomodacao.delete({
      where: { id },
    });
  }
}

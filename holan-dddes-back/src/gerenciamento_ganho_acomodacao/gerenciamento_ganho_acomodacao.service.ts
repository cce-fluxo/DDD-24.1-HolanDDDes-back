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

  findOne(findOneGerenciamentoGanhoAcomodacaoDto: any) {
    const acharUmaGerenciamentoGanhoAcomodacao =
      this.prisma.gerenciamento_ganhos_acomodacao.findUnique({
        where: findOneGerenciamentoGanhoAcomodacaoDto,
      });
    return acharUmaGerenciamentoGanhoAcomodacao;
  }

  update(
    p0: number,
    updateGerenciamentoGanhoAcomodacaoDto: UpdateGerenciamentoGanhoAcomodacaoDto,
  ) {
    const atualizarGerenciamentoGanhoAcomodacao =
      this.prisma.gerenciamento_ganhos_acomodacao.update({
        where: { id: updateGerenciamentoGanhoAcomodacaoDto.id },
        data: updateGerenciamentoGanhoAcomodacaoDto,
      });
    return atualizarGerenciamentoGanhoAcomodacao;
  }

  remove(deleteGerenciamentoGanhoAcomodacaoDto: any) {
    const deletarGerenciamentoGanhoAcomodacao =
      this.prisma.gerenciamento_ganhos_acomodacao.delete({
        where: deleteGerenciamentoGanhoAcomodacaoDto,
      });
    return deletarGerenciamentoGanhoAcomodacao;
  }
}

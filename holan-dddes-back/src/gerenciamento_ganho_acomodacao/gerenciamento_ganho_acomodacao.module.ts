import { Module } from '@nestjs/common';
import { GerenciamentoGanhoAcomodacaoService } from './gerenciamento_ganho_acomodacao.service';
import { GerenciamentoGanhoAcomodacaoController } from './gerenciamento_ganho_acomodacao.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [GerenciamentoGanhoAcomodacaoController],
  providers: [GerenciamentoGanhoAcomodacaoService, PrismaService],
})
export class GerenciamentoGanhoAcomodacaoModule {}

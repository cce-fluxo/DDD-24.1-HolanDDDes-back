import { Module } from '@nestjs/common';
import { GerenciamentoGanhoAcomodacaoService } from './gerenciamento_ganho_acomodacao.service';
import { GerenciamentoGanhoAcomodacaoController } from './gerenciamento_ganho_acomodacao.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [GerenciamentoGanhoAcomodacaoController],
  providers: [GerenciamentoGanhoAcomodacaoService, PrismaService, JwtService],
})
export class GerenciamentoGanhoAcomodacaoModule {}

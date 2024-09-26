import { Module } from '@nestjs/common';
import { GerenciamentoGanhoService } from './gerenciamento_ganho.service';
import { GerenciamentoGanhoController } from './gerenciamento_ganho.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [GerenciamentoGanhoController],
  providers: [GerenciamentoGanhoService, PrismaService, JwtService],
})
export class GerenciamentoGanhoModule {}

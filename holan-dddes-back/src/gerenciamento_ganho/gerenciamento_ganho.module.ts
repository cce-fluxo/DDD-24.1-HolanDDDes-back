import { Module } from '@nestjs/common';
import { GerenciamentoGanhoService } from './gerenciamento_ganho.service';
import { GerenciamentoGanhoController } from './gerenciamento_ganho.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [GerenciamentoGanhoController],
  providers: [GerenciamentoGanhoService, PrismaService],
})
export class GerenciamentoGanhoModule {}

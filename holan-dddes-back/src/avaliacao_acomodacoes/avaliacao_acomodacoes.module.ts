import { Module } from '@nestjs/common';
import { AvaliacaoAcomodacoesService } from './avaliacao_acomodacoes.service';
import { AvaliacaoAcomodacoesController } from './avaliacao_acomodacoes.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [AvaliacaoAcomodacoesController],
  providers: [AvaliacaoAcomodacoesService, PrismaService],
})
export class AvaliacaoAcomodacoesModule {}

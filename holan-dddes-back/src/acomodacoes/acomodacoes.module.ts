import { Module } from '@nestjs/common';
import { AcomodacoesService } from './acomodacoes.service';
import { AcomodacoesController } from './acomodacoes.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [AcomodacoesController],
  providers: [AcomodacoesService, PrismaService],
})
export class AcomodacoesModule {}

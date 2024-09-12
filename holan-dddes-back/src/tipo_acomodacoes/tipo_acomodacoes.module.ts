import { Module } from '@nestjs/common';
import { TipoAcomodacoesService } from './tipo_acomodacoes.service';
import { TipoAcomodacoesController } from './tipo_acomodacoes.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [TipoAcomodacoesController],
  providers: [TipoAcomodacoesService, PrismaService],
})
export class TipoAcomodacoesModule {}

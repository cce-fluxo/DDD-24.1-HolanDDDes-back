import { Module } from '@nestjs/common';
import { FotosAcomodacoesService } from './fotos_acomodacoes.service';
import { FotosAcomodacoesController } from './fotos_acomodacoes.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [FotosAcomodacoesController],
  providers: [FotosAcomodacoesService, PrismaService],
})
export class FotosAcomodacoesModule {}

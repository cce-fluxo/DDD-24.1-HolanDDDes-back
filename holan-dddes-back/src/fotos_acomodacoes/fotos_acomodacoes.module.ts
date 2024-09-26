import { Module } from '@nestjs/common';
import { FotosAcomodacoesService } from './fotos_acomodacoes.service';
import { FotosAcomodacoesController } from './fotos_acomodacoes.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [FotosAcomodacoesController],
  providers: [FotosAcomodacoesService, PrismaService, JwtService],
})
export class FotosAcomodacoesModule {}

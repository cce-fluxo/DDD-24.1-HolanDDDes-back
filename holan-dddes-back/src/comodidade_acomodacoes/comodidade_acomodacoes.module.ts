import { Module } from '@nestjs/common';
import { ComodidadeAcomodacoesService } from './comodidade_acomodacoes.service';
import { ComodidadeAcomodacoesController } from './comodidade_acomodacoes.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ComodidadeAcomodacoesController],
  providers: [ComodidadeAcomodacoesService, PrismaService, JwtService],
})
export class ComodidadeAcomodacoesModule {}

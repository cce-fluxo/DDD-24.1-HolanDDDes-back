import { Module } from '@nestjs/common';
import { tipoAcomodacaosService } from './tipo_acomodacoes.service';
import { tipoAcomodacaosController } from './tipo_acomodacoes.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [tipoAcomodacaosController],
  providers: [tipoAcomodacaosService, PrismaService, JwtService],
})
export class TipoAcomodacoesModule {}

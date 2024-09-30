import { Module } from '@nestjs/common';
import { DescricaoDetalhadaService } from './descricao_detalhada.service';
import { DescricaoDetalhadaController } from './descricao_detalhada.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [DescricaoDetalhadaController],
  providers: [DescricaoDetalhadaService, PrismaService, JwtService],
})
export class DescricaoDetalhadaModule {}

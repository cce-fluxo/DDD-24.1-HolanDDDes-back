import { Module } from '@nestjs/common';
import { AcomodacoesService } from './acomodacoes.service';
import { AcomodacoesController } from './acomodacoes.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AcomodacoesController],
  providers: [AcomodacoesService, PrismaService, JwtService],
})
export class AcomodacoesModule {}

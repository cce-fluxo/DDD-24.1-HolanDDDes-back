import { Module } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoController } from './avaliacao.controller';
import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService, PrismaService, JwtService],
})
export class AvaliacaoModule {}

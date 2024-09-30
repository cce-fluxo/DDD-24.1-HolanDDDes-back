import { Module } from '@nestjs/common';
import { CobrancaService } from './cobranca.service';
import { CobrancaController } from './cobranca.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [CobrancaController],
  providers: [CobrancaService, PrismaService, JwtService],
})
export class CobrancaModule {}

import { Module } from '@nestjs/common';
import { CobrancaService } from './cobranca.service';
import { CobrancaController } from './cobranca.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [CobrancaController],
  providers: [CobrancaService, PrismaService],
})
export class CobrancaModule {}

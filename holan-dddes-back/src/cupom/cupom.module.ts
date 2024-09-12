import { Module } from '@nestjs/common';
import { CupomService } from './cupom.service';
import { CupomController } from './cupom.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [CupomController],
  providers: [CupomService, PrismaService],
})
export class CupomModule {}

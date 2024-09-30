import { Module } from '@nestjs/common';
import { CupomService } from './cupom.service';
import { CupomController } from './cupom.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [CupomController],
  providers: [CupomService, PrismaService, JwtService],
})
export class CupomModule {}

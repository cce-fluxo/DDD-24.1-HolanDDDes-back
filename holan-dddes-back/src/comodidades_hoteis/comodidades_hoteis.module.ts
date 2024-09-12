import { Module } from '@nestjs/common';
import { ComodidadesHoteisService } from './comodidades_hoteis.service';
import { ComodidadesHoteisController } from './comodidades_hoteis.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [ComodidadesHoteisController],
  providers: [ComodidadesHoteisService, PrismaService],
})
export class ComodidadesHoteisModule {}

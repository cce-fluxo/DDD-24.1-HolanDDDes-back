import { Module } from '@nestjs/common';
import { comodidadesHotelsService } from './comodidades_hoteis.service';
import { ComodidadesHoteisController } from './comodidades_hoteis.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [ComodidadesHoteisController],
  providers: [comodidadesHotelsService, PrismaService],
})
export class ComodidadesHoteisModule {}

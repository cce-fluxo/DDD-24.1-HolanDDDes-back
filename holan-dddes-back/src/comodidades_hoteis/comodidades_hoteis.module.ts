import { Module } from '@nestjs/common';
import { comodidadesHotelsService } from './comodidades_hoteis.service';
import { ComodidadesHoteisController } from './comodidades_hoteis.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ComodidadesHoteisController],
  providers: [comodidadesHotelsService, PrismaService, JwtService],
})
export class ComodidadesHoteisModule {}

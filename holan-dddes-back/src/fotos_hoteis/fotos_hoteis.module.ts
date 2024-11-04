/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { fotosHotelsService } from './fotos_hoteis.service';
import { fotosHotelsController } from './fotos_hoteis.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { HoteisModule } from 'src/hoteis/hoteis.module';
import { hotelsService } from 'src/hoteis/hoteis.service';

@Module({
  controllers: [fotosHotelsController],
  providers: [fotosHotelsService, PrismaService, JwtService, hotelsService],
  imports: [HoteisModule],
})
export class FotosHoteisModule {}

import { Module } from '@nestjs/common';
import { fotosHotelsService } from './fotos_hoteis.service';
import { fotosHotelsController } from './fotos_hoteis.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [fotosHotelsController],
  providers: [fotosHotelsService, PrismaService, JwtService],
})
export class FotosHoteisModule {}

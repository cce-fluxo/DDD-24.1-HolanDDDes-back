import { Module } from '@nestjs/common';
import { fotosHotelsService } from './fotos_hoteis.service';
import { fotosHotelsController } from './fotos_hoteis.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [fotosHotelsController],
  providers: [fotosHotelsService, PrismaService],
})
export class FotosHoteisModule {}

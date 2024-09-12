import { Module } from '@nestjs/common';
import { FotosHoteisService } from './fotos_hoteis.service';
import { FotosHoteisController } from './fotos_hoteis.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [FotosHoteisController],
  providers: [FotosHoteisService, PrismaService],
})
export class FotosHoteisModule {}

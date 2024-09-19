/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { hotelsService } from './hoteis.service';
import { HoteisController } from './hoteis.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [HoteisController],
  providers: [hotelsService, PrismaService],
})
export class HoteisModule {}

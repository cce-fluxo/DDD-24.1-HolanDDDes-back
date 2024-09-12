import { Module } from '@nestjs/common';
import { HoteisService } from './hoteis.service';
import { HoteisController } from './hoteis.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [HoteisController],
  providers: [HoteisService, PrismaService],
})
export class HoteisModule {}

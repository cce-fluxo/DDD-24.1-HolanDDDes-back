/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { hotelsService } from './hoteis.service';
import { HoteisController } from './hoteis.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [HoteisController],
  providers: [hotelsService, PrismaService, JwtService],
})
export class HoteisModule {}

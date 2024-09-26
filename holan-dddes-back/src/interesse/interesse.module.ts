import { Module } from '@nestjs/common';
import { InteresseService } from './interesse.service';
import { InteresseController } from './interesse.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [InteresseController],
  providers: [InteresseService, PrismaService, JwtService],
})
export class InteresseModule {}

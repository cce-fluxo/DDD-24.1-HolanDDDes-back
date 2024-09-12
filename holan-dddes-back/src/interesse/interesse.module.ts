import { Module } from '@nestjs/common';
import { InteresseService } from './interesse.service';
import { InteresseController } from './interesse.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [InteresseController],
  providers: [InteresseService, PrismaService],
})
export class InteresseModule {}

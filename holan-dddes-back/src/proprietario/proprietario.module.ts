import { Module } from '@nestjs/common';
import { ProprietarioService } from './proprietario.service';
import { ProprietarioController } from './proprietario.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ProprietarioController],
  providers: [ProprietarioService, PrismaService, JwtService],
})
export class ProprietarioModule {}

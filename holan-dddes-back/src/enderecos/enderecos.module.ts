import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [EnderecosController],
  providers: [EnderecosService, PrismaService, JwtService],
})
export class EnderecosModule {}

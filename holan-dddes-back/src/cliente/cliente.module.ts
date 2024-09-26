import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService, PrismaService, JwtService],
})
export class ClienteModule {}

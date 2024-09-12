import { Module } from '@nestjs/common';
import { ProprietarioService } from './proprietario.service';
import { ProprietarioController } from './proprietario.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [ProprietarioController],
  providers: [ProprietarioService, PrismaService],
})
export class ProprietarioModule {}

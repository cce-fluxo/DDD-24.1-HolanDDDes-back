import { Module } from '@nestjs/common';
import { FotoUsuarioService } from './foto_usuario.service';
import { FotoUsuarioController } from './foto_usuario.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [FotoUsuarioController],
  providers: [FotoUsuarioService, PrismaService],
})
export class FotoUsuarioModule {}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FotoUsuarioService } from './foto_usuario.service';
import { FotoUsuarioController } from './foto_usuario.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CloudinaryConfig } from './cloudinary.config';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [UsuarioModule], 
  controllers: [FotoUsuarioController],
  providers: [FotoUsuarioService, PrismaService, JwtService, CloudinaryConfig],
  exports: [FotoUsuarioService, CloudinaryConfig], 
})

export class FotoUsuarioModule {}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../database/prisma.service';
import { localStrategy } from './strategies/local-strategy';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
  // Disponibilizamos o prismaservice para importa-lo em qualquer outro arquivo
  providers: [AuthService, PrismaService, UsuarioService, localStrategy, JwtService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}

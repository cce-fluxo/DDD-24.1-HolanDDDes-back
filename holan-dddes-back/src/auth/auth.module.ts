/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../database/prisma.service';
import { localStrategy } from './strategies/local-strategy';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt-strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsuarioModule } from '../usuario/usuario.module';
import { RolesGuard } from './guards/roles.guard';

@Module({
  // Disponibilizamos o prismaservice para importa-lo em qualquer outro arquivo
  providers: [AuthService, PrismaService, UsuarioService, localStrategy, JwtService, JwtStrategy, RolesGuard],
  controllers: [AuthController],
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
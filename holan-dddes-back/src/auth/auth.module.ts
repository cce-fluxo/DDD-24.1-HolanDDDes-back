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
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { LoginValidationMiddleware } from './middlewares/login-validation.middleware';

@Module({
  // Disponibilizamos o prismaservice para importa-lo em qualquer outro arquivo
  providers: [AuthService, PrismaService, UsuarioService, localStrategy, JwtService, JwtStrategy],
  controllers: [AuthController],
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}

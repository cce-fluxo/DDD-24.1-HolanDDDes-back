import { Module } from '@nestjs/common';
import { NotificacaoService } from './notificacao.service';
import { NotificacaoController } from './notificacao.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [NotificacaoController],
  providers: [NotificacaoService, PrismaService, JwtService],
})
export class NotificacaoModule {}

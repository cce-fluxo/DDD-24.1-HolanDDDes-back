import { Module } from '@nestjs/common';
import { FavoritoService } from './favorito.service';
import { FavoritoController } from './favorito.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [FavoritoController],
  providers: [FavoritoService, PrismaService],
})
export class FavoritoModule {}

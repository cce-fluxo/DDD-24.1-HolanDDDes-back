/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FotosAcomodacoesService } from './fotos_acomodacoes.service';
import { FotosAcomodacoesController } from './fotos_acomodacoes.controller';
import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AcomodacoesModule } from 'src/acomodacoes/acomodacoes.module';
import { CloudinaryConfig } from './cloudinary.config';

@Module({
  controllers: [FotosAcomodacoesController],
  providers: [FotosAcomodacoesService, PrismaService, JwtService, CloudinaryConfig],
  imports: [AcomodacoesModule], 
  exports: [FotosAcomodacoesService, CloudinaryConfig], 
})
export class FotosAcomodacoesModule {}

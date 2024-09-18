import { Module } from '@nestjs/common';
import { AssociacaoProprietarioInteresseService } from './associacao_proprietario_interesse.service';
import { AssociacaoProprietarioInteresseController } from './associacao_proprietario_interesse.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [AssociacaoProprietarioInteresseController],
  providers: [AssociacaoProprietarioInteresseService, PrismaService],
})
export class AssociacaoProprietarioInteresseModule {}

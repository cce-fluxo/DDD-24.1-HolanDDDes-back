import { Module } from '@nestjs/common';
import { AssociacaoProprietarioInteresseService } from './associacao_proprietario_interesse.service';
import { AssociacaoProprietarioInteresseController } from './associacao_proprietario_interesse.controller';

@Module({
  controllers: [AssociacaoProprietarioInteresseController],
  providers: [AssociacaoProprietarioInteresseService],
})
export class AssociacaoProprietarioInteresseModule {}

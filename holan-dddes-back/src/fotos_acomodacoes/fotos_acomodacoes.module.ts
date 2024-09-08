import { Module } from '@nestjs/common';
import { FotosAcomodacoesService } from './fotos_acomodacoes.service';
import { FotosAcomodacoesController } from './fotos_acomodacoes.controller';

@Module({
  controllers: [FotosAcomodacoesController],
  providers: [FotosAcomodacoesService],
})
export class FotosAcomodacoesModule {}

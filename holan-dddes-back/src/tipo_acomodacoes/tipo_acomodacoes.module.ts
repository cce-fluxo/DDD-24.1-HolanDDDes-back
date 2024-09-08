import { Module } from '@nestjs/common';
import { TipoAcomodacoesService } from './tipo_acomodacoes.service';
import { TipoAcomodacoesController } from './tipo_acomodacoes.controller';

@Module({
  controllers: [TipoAcomodacoesController],
  providers: [TipoAcomodacoesService],
})
export class TipoAcomodacoesModule {}

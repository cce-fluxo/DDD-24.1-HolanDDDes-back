import { Module } from '@nestjs/common';
import { AvaliacaoAcomodacoesService } from './avaliacao_acomodacoes.service';
import { AvaliacaoAcomodacoesController } from './avaliacao_acomodacoes.controller';

@Module({
  controllers: [AvaliacaoAcomodacoesController],
  providers: [AvaliacaoAcomodacoesService],
})
export class AvaliacaoAcomodacoesModule {}

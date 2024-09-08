import { Module } from '@nestjs/common';
import { GerenciamentoGanhoAcomodacaoService } from './gerenciamento_ganho_acomodacao.service';
import { GerenciamentoGanhoAcomodacaoController } from './gerenciamento_ganho_acomodacao.controller';

@Module({
  controllers: [GerenciamentoGanhoAcomodacaoController],
  providers: [GerenciamentoGanhoAcomodacaoService],
})
export class GerenciamentoGanhoAcomodacaoModule {}

import { Module } from '@nestjs/common';
import { GerenciamentoGanhoService } from './gerenciamento_ganho.service';
import { GerenciamentoGanhoController } from './gerenciamento_ganho.controller';

@Module({
  controllers: [GerenciamentoGanhoController],
  providers: [GerenciamentoGanhoService],
})
export class GerenciamentoGanhoModule {}

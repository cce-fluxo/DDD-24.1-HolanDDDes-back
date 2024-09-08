import { Module } from '@nestjs/common';
import { DescricaoDetalhadaService } from './descricao_detalhada.service';
import { DescricaoDetalhadaController } from './descricao_detalhada.controller';

@Module({
  controllers: [DescricaoDetalhadaController],
  providers: [DescricaoDetalhadaService],
})
export class DescricaoDetalhadaModule {}

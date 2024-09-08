import { Module } from '@nestjs/common';
import { ComodidadeAcomodacoesService } from './comodidade_acomodacoes.service';
import { ComodidadeAcomodacoesController } from './comodidade_acomodacoes.controller';

@Module({
  controllers: [ComodidadeAcomodacoesController],
  providers: [ComodidadeAcomodacoesService],
})
export class ComodidadeAcomodacoesModule {}

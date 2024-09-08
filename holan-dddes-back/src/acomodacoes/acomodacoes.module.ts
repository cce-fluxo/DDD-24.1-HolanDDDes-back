import { Module } from '@nestjs/common';
import { AcomodacoesService } from './acomodacoes.service';
import { AcomodacoesController } from './acomodacoes.controller';

@Module({
  controllers: [AcomodacoesController],
  providers: [AcomodacoesService],
})
export class AcomodacoesModule {}

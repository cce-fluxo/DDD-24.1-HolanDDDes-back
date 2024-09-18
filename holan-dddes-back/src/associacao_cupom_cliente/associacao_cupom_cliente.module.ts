import { Module } from '@nestjs/common';
import { AssociacaoCupomClienteService } from './associacao_cupom_cliente.service';
import { AssociacaoCupomClienteController } from './associacao_cupom_cliente.controller';

@Module({
  controllers: [AssociacaoCupomClienteController],
  providers: [AssociacaoCupomClienteService],
})
export class AssociacaoCupomClienteModule {}

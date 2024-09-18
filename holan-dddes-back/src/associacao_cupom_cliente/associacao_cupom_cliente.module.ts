import { Module } from '@nestjs/common';
import { AssociacaoCupomClienteService } from './associacao_cupom_cliente.service';
import { AssociacaoCupomClienteController } from './associacao_cupom_cliente.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [AssociacaoCupomClienteController],
  providers: [AssociacaoCupomClienteService, PrismaService],
})
export class AssociacaoCupomClienteModule {}

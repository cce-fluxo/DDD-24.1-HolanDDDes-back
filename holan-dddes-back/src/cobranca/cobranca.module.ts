import { Module } from '@nestjs/common';
import { CobrancaService } from './cobranca.service';
import { CobrancaController } from './cobranca.controller';

@Module({
  controllers: [CobrancaController],
  providers: [CobrancaService],
})
export class CobrancaModule {}

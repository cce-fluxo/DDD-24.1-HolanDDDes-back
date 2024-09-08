import { Module } from '@nestjs/common';
import { ComodidadesHoteisService } from './comodidades_hoteis.service';
import { ComodidadesHoteisController } from './comodidades_hoteis.controller';

@Module({
  controllers: [ComodidadesHoteisController],
  providers: [ComodidadesHoteisService],
})
export class ComodidadesHoteisModule {}

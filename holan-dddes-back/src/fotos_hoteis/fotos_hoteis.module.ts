import { Module } from '@nestjs/common';
import { FotosHoteisService } from './fotos_hoteis.service';
import { FotosHoteisController } from './fotos_hoteis.controller';

@Module({
  controllers: [FotosHoteisController],
  providers: [FotosHoteisService],
})
export class FotosHoteisModule {}

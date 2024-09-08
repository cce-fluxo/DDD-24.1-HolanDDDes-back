import { Module } from '@nestjs/common';
import { HoteisService } from './hoteis.service';
import { HoteisController } from './hoteis.controller';

@Module({
  controllers: [HoteisController],
  providers: [HoteisService],
})
export class HoteisModule {}

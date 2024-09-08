import { Module } from '@nestjs/common';
import { AvaliacaoHotelService } from './avaliacao_hotel.service';
import { AvaliacaoHotelController } from './avaliacao_hotel.controller';

@Module({
  controllers: [AvaliacaoHotelController],
  providers: [AvaliacaoHotelService],
})
export class AvaliacaoHotelModule {}

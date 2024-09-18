import { Module } from '@nestjs/common';
import { AssociacaoCupomHotelService } from './associacao_cupom_hotel.service';
import { AssociacaoCupomHotelController } from './associacao_cupom_hotel.controller';

@Module({
  controllers: [AssociacaoCupomHotelController],
  providers: [AssociacaoCupomHotelService],
})
export class AssociacaoCupomHotelModule {}

import { Module } from '@nestjs/common';
import { AssociacaoCupomHotelService } from './associacao_cupom_hotel.service';
import { AssociacaoCupomHotelController } from './associacao_cupom_hotel.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [AssociacaoCupomHotelController],
  providers: [AssociacaoCupomHotelService, PrismaService],
})
export class AssociacaoCupomHotelModule {}

import { Module } from '@nestjs/common';
import { ComodidadeNoHotelController } from './comodidade-no-hotel.controller';
import { ComodidadeNoHotelService } from './comodidade-no-hotel.service';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [ComodidadeNoHotelController],
  providers: [ComodidadeNoHotelService, PrismaService],
})
export class ComodidadeNoHotelModule {}

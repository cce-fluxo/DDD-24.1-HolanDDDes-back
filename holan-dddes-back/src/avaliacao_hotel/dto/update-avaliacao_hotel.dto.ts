import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliacaoHotelDto } from './create-avaliacao_hotel.dto';

export class UpdateAvaliacaoHotelDto extends PartialType(CreateAvaliacaoHotelDto) {}

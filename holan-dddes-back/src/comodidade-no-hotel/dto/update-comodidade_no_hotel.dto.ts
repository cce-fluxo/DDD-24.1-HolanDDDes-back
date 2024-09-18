import { PartialType } from '@nestjs/mapped-types';
import { CreateComodidadeNoHotelDto } from './create-comodidade_no_hotel.dto';

export class UpdateComodidadeNoHotelDto extends PartialType(
  CreateComodidadeNoHotelDto,
) {}

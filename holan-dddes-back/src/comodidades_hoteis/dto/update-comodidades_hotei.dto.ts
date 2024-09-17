import { PartialType } from '@nestjs/mapped-types';
import { CreateComodidadesHotelDto } from './create-comodidades_hotei.dto';

export class UpdateComodidadesHotelDto extends PartialType(CreateComodidadesHotelDto) {
  id: any;
}

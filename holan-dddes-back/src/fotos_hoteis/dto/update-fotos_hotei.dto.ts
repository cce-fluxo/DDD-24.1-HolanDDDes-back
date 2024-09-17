import { PartialType } from '@nestjs/mapped-types';
import { CreatefotosHotelDto } from './create-fotos_hotei.dto';

export class UpdatefotosHotelDto extends PartialType(CreatefotosHotelDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateFotosAcomodacoeDto } from './create-fotos_acomodacoe.dto';

export class UpdateFotosAcomodacoeDto extends PartialType(CreateFotosAcomodacoeDto) {}

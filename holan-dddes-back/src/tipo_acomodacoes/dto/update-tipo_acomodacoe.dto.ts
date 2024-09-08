import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoAcomodacoeDto } from './create-tipo_acomodacoe.dto';

export class UpdateTipoAcomodacoeDto extends PartialType(CreateTipoAcomodacoeDto) {}

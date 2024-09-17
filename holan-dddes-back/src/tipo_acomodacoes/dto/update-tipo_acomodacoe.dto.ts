import { PartialType } from '@nestjs/mapped-types';
import { CreatetipoAcomodacaoDto } from './create-tipo_acomodacoe.dto';

export class UpdatetipoAcomodacaoDto extends PartialType(CreatetipoAcomodacaoDto) {}

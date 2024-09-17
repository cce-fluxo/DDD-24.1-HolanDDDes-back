import { PartialType } from '@nestjs/mapped-types';
import { CreateFotosAcomodacaoDto } from './create-fotos_acomodacoe.dto';

export class UpdateFotosAcomodacaoDto extends PartialType(CreateFotosAcomodacaoDto) {}

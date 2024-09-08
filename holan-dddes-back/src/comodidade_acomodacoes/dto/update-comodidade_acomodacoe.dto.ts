import { PartialType } from '@nestjs/mapped-types';
import { CreateComodidadeAcomodacoeDto } from './create-comodidade_acomodacoe.dto';

export class UpdateComodidadeAcomodacoeDto extends PartialType(CreateComodidadeAcomodacoeDto) {}

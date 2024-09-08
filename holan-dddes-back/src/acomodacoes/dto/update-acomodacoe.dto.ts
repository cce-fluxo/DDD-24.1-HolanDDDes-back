import { PartialType } from '@nestjs/mapped-types';
import { CreateAcomodacoeDto } from './create-acomodacoe.dto';

export class UpdateAcomodacoeDto extends PartialType(CreateAcomodacoeDto) {}

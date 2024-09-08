import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliacaoAcomodacoeDto } from './create-avaliacao_acomodacoe.dto';

export class UpdateAvaliacaoAcomodacoeDto extends PartialType(CreateAvaliacaoAcomodacoeDto) {}

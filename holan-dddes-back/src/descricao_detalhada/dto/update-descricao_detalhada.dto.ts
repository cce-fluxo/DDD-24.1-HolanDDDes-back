import { PartialType } from '@nestjs/mapped-types';
import { CreateDescricaoDetalhadaDto } from './create-descricao_detalhada.dto';

export class UpdateDescricaoDetalhadaDto extends PartialType(CreateDescricaoDetalhadaDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateGerenciamentoGanhoAcomodacaoDto } from './create-gerenciamento_ganho_acomodacao.dto';

export class UpdateGerenciamentoGanhoAcomodacaoDto extends PartialType(CreateGerenciamentoGanhoAcomodacaoDto) {}

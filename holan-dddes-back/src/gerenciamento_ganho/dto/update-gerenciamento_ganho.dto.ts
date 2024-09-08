import { PartialType } from '@nestjs/mapped-types';
import { CreateGerenciamentoGanhoDto } from './create-gerenciamento_ganho.dto';

export class UpdateGerenciamentoGanhoDto extends PartialType(CreateGerenciamentoGanhoDto) {}

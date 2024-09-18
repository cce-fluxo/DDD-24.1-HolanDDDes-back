import { PartialType } from '@nestjs/mapped-types';
import { CreateAssociacaoProprietarioInteresseDto } from './create-associacao_proprietario_interesse.dto';

export class UpdateAssociacaoProprietarioInteresseDto extends PartialType(CreateAssociacaoProprietarioInteresseDto) {}

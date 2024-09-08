import { PartialType } from '@nestjs/mapped-types';
import { CreateCobrancaDto } from './create-cobranca.dto';

export class UpdateCobrancaDto extends PartialType(CreateCobrancaDto) {}

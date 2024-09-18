import { PartialType } from '@nestjs/mapped-types';
import { CreateAssociacaoCupomClienteDto } from './create-associacao_cupom_cliente.dto';

export class UpdateAssociacaoCupomClienteDto extends PartialType(CreateAssociacaoCupomClienteDto) {}

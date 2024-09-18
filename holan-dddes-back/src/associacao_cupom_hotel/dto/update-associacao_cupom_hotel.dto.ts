import { PartialType } from '@nestjs/mapped-types';
import { CreateAssociacaoCupomHotelDto } from './create-associacao_cupom_hotel.dto';

export class UpdateAssociacaoCupomHotelDto extends PartialType(CreateAssociacaoCupomHotelDto) {}

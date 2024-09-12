import { PartialType } from '@nestjs/mapped-types';
import { CreateComodidadesHoteiDto } from './create-comodidades_hotei.dto';

export class UpdateComodidadesHoteiDto extends PartialType(CreateComodidadesHoteiDto) {
  id: any;
}

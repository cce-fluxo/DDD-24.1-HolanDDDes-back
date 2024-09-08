import { PartialType } from '@nestjs/mapped-types';
import { CreateHoteiDto } from './create-hotei.dto';

export class UpdateHoteiDto extends PartialType(CreateHoteiDto) {}

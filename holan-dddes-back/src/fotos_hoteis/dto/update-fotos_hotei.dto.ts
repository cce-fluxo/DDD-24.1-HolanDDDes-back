import { PartialType } from '@nestjs/mapped-types';
import { CreateFotosHoteiDto } from './create-fotos_hotei.dto';

export class UpdateFotosHoteiDto extends PartialType(CreateFotosHoteiDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreatehotelDto } from './create-hotei.dto';

export class UpdatehotelDto extends PartialType(CreatehotelDto) {}

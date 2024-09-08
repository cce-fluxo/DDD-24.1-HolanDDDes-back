import { PartialType } from '@nestjs/mapped-types';
import { CreateFotoUsuarioDto } from './create-foto_usuario.dto';

export class UpdateFotoUsuarioDto extends PartialType(CreateFotoUsuarioDto) {}

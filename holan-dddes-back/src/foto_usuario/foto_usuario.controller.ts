import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FotoUsuarioService } from './foto_usuario.service';
import { CreateFotoUsuarioDto } from './dto/create-foto_usuario.dto';
import { UpdateFotoUsuarioDto } from './dto/update-foto_usuario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("foto_usuario")
@Controller('foto-usuario')
export class FotoUsuarioController {
  constructor(private readonly fotoUsuarioService: FotoUsuarioService) {}

  @Post()
  create(@Body() createFotoUsuarioDto: CreateFotoUsuarioDto) {
    return this.fotoUsuarioService.create(createFotoUsuarioDto);
  }

  @Get()
  findAll(@Body() findAllFotoUsuarioDto: any) {
    return this.fotoUsuarioService.findAll(findAllFotoUsuarioDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.fotoUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateFotoUsuarioDto: UpdateFotoUsuarioDto,
  ) {
    return this.fotoUsuarioService.update(+id, updateFotoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.fotoUsuarioService.remove(+id);
  }
}

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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("foto_usuario")
@Controller('foto-usuario')
export class FotoUsuarioController {
  constructor(private readonly fotoUsuarioService: FotoUsuarioService) {}

  @Post() // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Cria uma nova foto',
    description: 'Cria uma nova foto com base nos dados fornecidos',
  })
  create(@Body() createFotoUsuarioDto: CreateFotoUsuarioDto) {
    return this.fotoUsuarioService.create(createFotoUsuarioDto);
  }

  @Get() // todos logados podem acessar
  @ApiOperation({
    summary: 'Busca todas as fotos',
    description: 'Busca todas as fotos com base nos filtros fornecidos',
  })
  findAll(@Body() findAllFotoUsuarioDto: any) {
    return this.fotoUsuarioService.findAll(findAllFotoUsuarioDto);
  }

  @Get(':id') // todos logados podem acessar
  @ApiOperation({
    summary: 'Busca uma foto específica',
    description: 'Busca uma foto específica com base no id fornecido',
  })
  findOne(@Param('id') id: number) {
    return this.fotoUsuarioService.findOne(+id);
  }

  @Patch(':id') // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Atualiza uma foto',
    description: 'Atualiza uma foto com base no id fornecido e nos dados fornecidos',
  })
  update(
    @Param('id') id: number,
    @Body() updateFotoUsuarioDto: UpdateFotoUsuarioDto,
  ) {
    return this.fotoUsuarioService.update(+id, updateFotoUsuarioDto);
  }

  @Delete(':id') // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Remove uma foto',
    description: 'Remove uma foto com base no id fornecido',
  })
  remove(@Param('id') id: number) {
    return this.fotoUsuarioService.remove(+id);
  }
}

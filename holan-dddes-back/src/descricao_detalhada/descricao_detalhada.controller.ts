import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DescricaoDetalhadaService } from './descricao_detalhada.service';
import { CreateDescricaoDetalhadaDto } from './dto/create-descricao_detalhada.dto';
import { UpdateDescricaoDetalhadaDto } from './dto/update-descricao_detalhada.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('descricao_detalhada')
@Controller('descricao-detalhada')
export class DescricaoDetalhadaController {
  constructor(
    private readonly descricaoDetalhadaService: DescricaoDetalhadaService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Cria uma nova descrição detalhada',
    description: 'Cria uma nova descrição detalhada com base nos dados fornecidos',
  })
  create(@Body() createDescricaoDetalhadaDto: CreateDescricaoDetalhadaDto) {
    return this.descricaoDetalhadaService.create(createDescricaoDetalhadaDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todas as descrições detalhadas',
    description: 'Busca todas as descrições detalhadas com base nos filtros fornecidos',
  })
  findAll(@Body() findAllDescricaoDetalhadaDto: any) {
    return this.descricaoDetalhadaService.findAll(findAllDescricaoDetalhadaDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca uma descrição detalhada específica',
    description: 'Busca uma descrição detalhada específica com base no id fornecido',
  })
  findOne(@Param('id') id: string) {
    return this.descricaoDetalhadaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza uma descrição detalhada',
    description: 'Atualiza uma descrição detalhada com base no id fornecido e nos dados fornecidos',
  })
  update(
    @Param('id') id: string,
    @Body() updateDescricaoDetalhadaDto: UpdateDescricaoDetalhadaDto,
  ) {
    return this.descricaoDetalhadaService.update(
      +id,
      updateDescricaoDetalhadaDto,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove uma descrição detalhada',
    description: 'Remove uma descrição detalhada com base no id fornecido',
  })
  remove(@Param('id') id: string) {
    return this.descricaoDetalhadaService.remove(+id);
  }
}

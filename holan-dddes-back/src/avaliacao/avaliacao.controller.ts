import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('avaliacao')
@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria uma nova avaliação',
    description: 'Cria uma nova avaliação com base nos dados fornecidos',
  })
  create(@Body() createAvaliacaoDto: CreateAvaliacaoDto) {
    return this.avaliacaoService.create(createAvaliacaoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todas as avaliações',
    description: 'Busca todas as avaliações com base nos filtros fornecidos',
  })
  findAll(findAllAvaliacaoDto?: any) {
    return this.avaliacaoService.findAll(findAllAvaliacaoDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca uma avaliação específica',
    description: 'Busca uma avaliação específica com base no id fornecido',
  })
  findOne(@Param('id') id: string) {
    return this.avaliacaoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza uma avaliação',
    description: 'Atualiza uma avaliação com base no id fornecido e nos dados fornecidos',
  })
  update(
    @Param('id') id: string,
    @Body() updateAvaliacaoDto: UpdateAvaliacaoDto,
  ) {
    return this.avaliacaoService.update(+id, updateAvaliacaoDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove uma avaliação',
    description: 'Remove uma avaliação com base no id fornecido',
  })
  remove(@Param('id') id: string) {
    return this.avaliacaoService.remove(+id);
  }
}

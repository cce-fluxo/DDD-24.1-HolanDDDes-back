/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { hotelsService } from './hoteis.service';
import { CreatehotelDto } from './dto/create-hotei.dto';
import { UpdatehotelDto } from './dto/update-hotei.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('hoteis')
@Controller('hotels')
export class HoteisController {
  constructor(private readonly hotelsService: hotelsService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um novo hotel',
    description: 'Cria um novo hotel com base nos dados fornecidos',
  })
  create(@Body() createhotelDto: CreatehotelDto) {
    return this.hotelsService.create(createhotelDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todos os hoteis',
    description: 'Busca todos os hoteis com base nos filtros fornecidos',
  })
  findAll(@Body() findAllhotelDto: any) {
    return this.hotelsService.findAll(findAllhotelDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca um hotel específico',
    description: 'Busca um hotel específico com base no id fornecido',
  })
  findOne(@Param('id') id: string) {
    return this.hotelsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um hotel',
    description: 'Atualiza um hotel com base no id fornecido e nos dados fornecidos',
  })
  update(@Param('id') id: string, @Body() updatehotelDto: UpdatehotelDto) {
    return this.hotelsService.update(+id, updatehotelDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove um hotel',
    description: 'Remove um hotel com base no id fornecido',
  })
  remove(@Param('id') id: string) {
    return this.hotelsService.remove(+id);
  }

  //Rota específica para buscar as acomodações de um hotel já especificado
  @Get(':id/acomodacoes')
  @ApiOperation({
    summary: 'Busca as acomodações de um hotel',
    description: 'Busca as acomodações de um hotel já especificado com base no id fornecido',
  })
  findAcomodacoes(@Param('id') id: string) {
    return this.hotelsService.findAcomodacoes(+id);
  }

  //Rota específica para buscar as comodidades de um hotel já especificado
  @Get(':id/comodidade')
  @ApiOperation({
    summary: 'Busca as comodidades de um hotel',
    description: 'Busca as comodidades de um hotel já especificado com base no id fornecido',
  })
  getComodidades(@Param('id') id: number) {
    return this.hotelsService.getComodidadesByHotel(+id);
  }

  //Rota específica para associar uma comodidade a um hotel
  @Post(':id/comodidade')
  @ApiOperation({
    summary: 'Cria uma comodidade para um hotel',
    description: 'Cria uma comodidade e associa a um hotel já especificado com base no id fornecido',
  })
  createComodidade(@Param('id') id: number, @Body() createComodidadeDto: any) {
    return this.hotelsService.createComodidadeHotel(+id, createComodidadeDto);
  }

  //Rota específica para buscar as fotos de um hotel já especificado
  @Get(':id/fotos')
  @ApiOperation({
    summary: 'Busca as fotos de um hotel',
    description: 'Busca as fotos de um hotel já especificado com base no id fornecido',
  })
  findFoto(@Param('id') id: string) {
    return this.hotelsService.findFoto(+id);
  }

  //Rota específica para buscar as avaliações de um hotel já especificado
  @Get(':id/avaliacoes')
  @ApiOperation({
    summary: 'Busca as avaliações de um hotel',
    description: 'Busca as avaliações de um hotel já especificado com base no id fornecido',
  })
  findAvaliacoes(@Param('id') id: string) {
    return this.hotelsService.findAvaliacoes(+id);
  }
}

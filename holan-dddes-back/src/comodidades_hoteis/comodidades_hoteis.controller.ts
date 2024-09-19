import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { comodidadesHotelsService } from './comodidades_hoteis.service';
import { CreateComodidadesHotelDto } from './dto/create-comodidades_hotei.dto';
import { UpdateComodidadesHotelDto } from './dto/update-comodidades_hotei.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('comodidade_hoteis')
@Controller('comodidades-hoteis')
export class ComodidadesHoteisController {
  constructor(
    private readonly comodidadesHotelsService: comodidadesHotelsService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Cria uma nova comodidade de hotel',
    description: 'Cria uma nova comodidade de hotel com base nos dados fornecidos',
  })
  create(@Body() createComodidadesHoteiDto: CreateComodidadesHotelDto) {
    return this.comodidadesHotelsService.create(createComodidadesHoteiDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todas as comodidades de hotel',
    description: 'Busca todas as comodidades de hotel com base nos filtros fornecidos',
  })
  findAll(@Body() findAllComodidadesHoteiDto: any) {
    return this.comodidadesHotelsService.findAll(findAllComodidadesHoteiDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca uma comodidade de hotel específica',
    description: 'Busca uma comodidade de hotel específica com base no id fornecido',
  })
  findOne(@Param('id') id: string) {
    return this.comodidadesHotelsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza uma comodidade de hotel',
    description: 'Atualiza uma comodidade de hotel com base no id fornecido e nos dados fornecidos',  
  })
  update(
    @Param('id') id: string,
    @Body() UpdateComodidadesHotelDto: UpdateComodidadesHotelDto,
  ) {
    return this.comodidadesHotelsService.update(+id, UpdateComodidadesHotelDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove uma comodidade de hotel',
    description: 'Remove uma comodidade de hotel com base no id fornecido',
  })
  remove(@Param('id') id: string) {
    return this.comodidadesHotelsService.remove(+id);
  }
}

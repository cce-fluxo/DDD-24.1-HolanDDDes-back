import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComodidadesHoteisService } from './comodidades_hoteis.service';
import { CreateComodidadesHoteiDto } from './dto/create-comodidades_hotei.dto';
import { UpdateComodidadesHoteiDto } from './dto/update-comodidades_hotei.dto';

@Controller('comodidades-hoteis')
export class ComodidadesHoteisController {
  constructor(
    private readonly comodidadesHoteisService: ComodidadesHoteisService,
  ) {}

  @Post()
  create(@Body() createComodidadesHoteiDto: CreateComodidadesHoteiDto) {
    return this.comodidadesHoteisService.create(createComodidadesHoteiDto);
  }

  @Get()
  findAll(@Body() findAllComodidadesHoteiDto: any) {
    return this.comodidadesHoteisService.findAll(findAllComodidadesHoteiDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comodidadesHoteisService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComodidadesHoteiDto: UpdateComodidadesHoteiDto,
  ) {
    return this.comodidadesHoteisService.update(+id, updateComodidadesHoteiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comodidadesHoteisService.remove(+id);
  }
}

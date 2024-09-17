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

@Controller('comodidades-hoteis')
export class ComodidadesHoteisController {
  constructor(
    private readonly comodidadesHotelsService: comodidadesHotelsService,
  ) {}

  @Post()
  create(@Body() createComodidadesHoteiDto: CreateComodidadesHotelDto) {
    return this.comodidadesHotelsService.create(createComodidadesHoteiDto);
  }

  @Get()
  findAll(@Body() findAllComodidadesHoteiDto: any) {
    return this.comodidadesHotelsService.findAll(findAllComodidadesHoteiDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comodidadesHotelsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateComodidadesHotelDto: UpdateComodidadesHotelDto,
  ) {
    return this.comodidadesHotelsService.update(+id, UpdateComodidadesHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comodidadesHotelsService.remove(+id);
  }
}

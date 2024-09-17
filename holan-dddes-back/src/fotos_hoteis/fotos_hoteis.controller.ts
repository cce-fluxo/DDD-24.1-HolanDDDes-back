import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { fotosHotelsService } from './fotos_hoteis.service';
import { CreatefotosHotelDto } from './dto/create-fotos_hotei.dto';
import { UpdatefotosHotelDto } from './dto/update-fotos_hotei.dto';

@Controller('fotos-hoteis')
export class fotosHotelsController {
  constructor(private readonly fotosHotelsService: fotosHotelsService) {}

  @Post()
  create(@Body() createfotosHotelDto: CreatefotosHotelDto) {
    return this.fotosHotelsService.create(createfotosHotelDto);
  }

  @Get()
  findAll(@Body() findAllfotosHotelDto: any) {
    return this.fotosHotelsService.findAll(findAllfotosHotelDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fotosHotelsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatefotosHotelDto: UpdatefotosHotelDto,
  ) {
    return this.fotosHotelsService.update(+id, updatefotosHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fotosHotelsService.remove(+id);
  }
}

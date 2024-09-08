import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvaliacaoHotelService } from './avaliacao_hotel.service';
import { CreateAvaliacaoHotelDto } from './dto/create-avaliacao_hotel.dto';
import { UpdateAvaliacaoHotelDto } from './dto/update-avaliacao_hotel.dto';

@Controller('avaliacao-hotel')
export class AvaliacaoHotelController {
  constructor(private readonly avaliacaoHotelService: AvaliacaoHotelService) {}

  @Post()
  create(@Body() createAvaliacaoHotelDto: CreateAvaliacaoHotelDto) {
    return this.avaliacaoHotelService.create(createAvaliacaoHotelDto);
  }

  @Get()
  findAll() {
    return this.avaliacaoHotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacaoHotelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvaliacaoHotelDto: UpdateAvaliacaoHotelDto) {
    return this.avaliacaoHotelService.update(+id, updateAvaliacaoHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacaoHotelService.remove(+id);
  }
}

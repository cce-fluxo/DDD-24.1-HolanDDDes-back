import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssociacaoCupomHotelService } from './associacao_cupom_hotel.service';
import { CreateAssociacaoCupomHotelDto } from './dto/create-associacao_cupom_hotel.dto';
import { UpdateAssociacaoCupomHotelDto } from './dto/update-associacao_cupom_hotel.dto';

@Controller('associacao-cupom-hotel')
export class AssociacaoCupomHotelController {
  constructor(private readonly associacaoCupomHotelService: AssociacaoCupomHotelService) {}

  @Post()
  create(@Body() createAssociacaoCupomHotelDto: CreateAssociacaoCupomHotelDto) {
    return this.associacaoCupomHotelService.create(createAssociacaoCupomHotelDto);
  }

  @Get()
  findAll() {
    return this.associacaoCupomHotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.associacaoCupomHotelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssociacaoCupomHotelDto: UpdateAssociacaoCupomHotelDto) {
    return this.associacaoCupomHotelService.update(+id, updateAssociacaoCupomHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.associacaoCupomHotelService.remove(+id);
  }
}

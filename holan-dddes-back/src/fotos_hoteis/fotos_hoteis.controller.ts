import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FotosHoteisService } from './fotos_hoteis.service';
import { CreateFotosHoteiDto } from './dto/create-fotos_hotei.dto';
import { UpdateFotosHoteiDto } from './dto/update-fotos_hotei.dto';

@Controller('fotos-hoteis')
export class FotosHoteisController {
  constructor(private readonly fotosHoteisService: FotosHoteisService) {}

  @Post()
  create(@Body() createFotosHoteiDto: CreateFotosHoteiDto) {
    return this.fotosHoteisService.create(createFotosHoteiDto);
  }

  @Get()
  findAll(@Body() findAllFotosHoteiDto: any) {
    return this.fotosHoteisService.findAll(findAllFotosHoteiDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fotosHoteisService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFotosHoteiDto: UpdateFotosHoteiDto,
  ) {
    return this.fotosHoteisService.update(+id, updateFotosHoteiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fotosHoteisService.remove(+id);
  }
}

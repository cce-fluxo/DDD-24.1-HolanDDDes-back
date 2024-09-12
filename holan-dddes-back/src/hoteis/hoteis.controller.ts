import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HoteisService } from './hoteis.service';
import { CreateHoteiDto } from './dto/create-hotei.dto';
import { UpdateHoteiDto } from './dto/update-hotei.dto';

@Controller('hoteis')
export class HoteisController {
  constructor(private readonly hoteisService: HoteisService) {}

  @Post()
  create(@Body() createHoteiDto: CreateHoteiDto) {
    return this.hoteisService.create(createHoteiDto);
  }

  @Get()
  findAll(@Body() findAllHoteiDto: any) {
    return this.hoteisService.findAll(findAllHoteiDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hoteisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHoteiDto: UpdateHoteiDto) {
    return this.hoteisService.update(+id, updateHoteiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hoteisService.remove(+id);
  }
}

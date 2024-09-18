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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('hoteis')
@Controller('hotels')
export class HoteisController {
  constructor(private readonly hotelsService: hotelsService) {}

  @Post()
  create(@Body() createhotelDto: CreatehotelDto) {
    return this.hotelsService.create(createhotelDto);
  }

  @Get()
  findAll(@Body() findAllhotelDto: any) {
    return this.hotelsService.findAll(findAllhotelDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatehotelDto: UpdatehotelDto) {
    return this.hotelsService.update(+id, updatehotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelsService.remove(+id);
  }
}

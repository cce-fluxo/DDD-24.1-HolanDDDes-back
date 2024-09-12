import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InteresseService } from './interesse.service';
import { CreateInteresseDto } from './dto/create-interesse.dto';
import { UpdateInteresseDto } from './dto/update-interesse.dto';

@Controller('interesse')
export class InteresseController {
  constructor(private readonly interesseService: InteresseService) {}

  @Post()
  create(@Body() createInteresseDto: CreateInteresseDto) {
    return this.interesseService.create(createInteresseDto);
  }

  @Get()
  findAll(@Body() findAllInteresseDto: any) {
    return this.interesseService.findAll(findAllInteresseDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interesseService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInteresseDto: UpdateInteresseDto,
  ) {
    return this.interesseService.update(+id, updateInteresseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interesseService.remove(+id);
  }
}

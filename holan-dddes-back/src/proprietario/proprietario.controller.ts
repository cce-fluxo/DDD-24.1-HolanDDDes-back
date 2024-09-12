import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProprietarioService } from './proprietario.service';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';

@Controller('proprietario')
export class ProprietarioController {
  constructor(private readonly proprietarioService: ProprietarioService) {}

  @Post()
  create(@Body() createProprietarioDto: CreateProprietarioDto) {
    return this.proprietarioService.create(createProprietarioDto);
  }

  @Get()
  findAll(@Body() findAllProprietarioDto: any) {
    return this.proprietarioService.findAll(findAllProprietarioDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proprietarioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProprietarioDto: UpdateProprietarioDto,
  ) {
    return this.proprietarioService.update(+id, updateProprietarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proprietarioService.remove(+id);
  }
}

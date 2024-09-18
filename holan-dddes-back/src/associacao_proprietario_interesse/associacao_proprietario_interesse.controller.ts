import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssociacaoProprietarioInteresseService } from './associacao_proprietario_interesse.service';
import { CreateAssociacaoProprietarioInteresseDto } from './dto/create-associacao_proprietario_interesse.dto';
import { UpdateAssociacaoProprietarioInteresseDto } from './dto/update-associacao_proprietario_interesse.dto';

@Controller('associacao-proprietario-interesse')
export class AssociacaoProprietarioInteresseController {
  constructor(private readonly associacaoProprietarioInteresseService: AssociacaoProprietarioInteresseService) {}

  @Post()
  create(@Body() createAssociacaoProprietarioInteresseDto: CreateAssociacaoProprietarioInteresseDto) {
    return this.associacaoProprietarioInteresseService.create(createAssociacaoProprietarioInteresseDto);
  }

  @Get()
  findAll() {
    return this.associacaoProprietarioInteresseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.associacaoProprietarioInteresseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAssociacaoProprietarioInteresseDto: UpdateAssociacaoProprietarioInteresseDto) {
    return this.associacaoProprietarioInteresseService.update(+id, updateAssociacaoProprietarioInteresseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.associacaoProprietarioInteresseService.remove(+id);
  }
}

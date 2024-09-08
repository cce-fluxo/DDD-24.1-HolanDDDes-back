import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvaliacaoAcomodacoesService } from './avaliacao_acomodacoes.service';
import { CreateAvaliacaoAcomodacoeDto } from './dto/create-avaliacao_acomodacoe.dto';
import { UpdateAvaliacaoAcomodacoeDto } from './dto/update-avaliacao_acomodacoe.dto';

@Controller('avaliacao-acomodacoes')
export class AvaliacaoAcomodacoesController {
  constructor(private readonly avaliacaoAcomodacoesService: AvaliacaoAcomodacoesService) {}

  @Post()
  create(@Body() createAvaliacaoAcomodacoeDto: CreateAvaliacaoAcomodacoeDto) {
    return this.avaliacaoAcomodacoesService.create(createAvaliacaoAcomodacoeDto);
  }

  @Get()
  findAll() {
    return this.avaliacaoAcomodacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacaoAcomodacoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvaliacaoAcomodacoeDto: UpdateAvaliacaoAcomodacoeDto) {
    return this.avaliacaoAcomodacoesService.update(+id, updateAvaliacaoAcomodacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacaoAcomodacoesService.remove(+id);
  }
}

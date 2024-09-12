import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GerenciamentoGanhoAcomodacaoService } from './gerenciamento_ganho_acomodacao.service';
import { CreateGerenciamentoGanhoAcomodacaoDto } from './dto/create-gerenciamento_ganho_acomodacao.dto';
import { UpdateGerenciamentoGanhoAcomodacaoDto } from './dto/update-gerenciamento_ganho_acomodacao.dto';

@Controller('gerenciamento-ganho-acomodacao')
export class GerenciamentoGanhoAcomodacaoController {
  constructor(
    private readonly gerenciamentoGanhoAcomodacaoService: GerenciamentoGanhoAcomodacaoService,
  ) {}

  @Post()
  create(
    @Body()
    createGerenciamentoGanhoAcomodacaoDto: CreateGerenciamentoGanhoAcomodacaoDto,
  ) {
    return this.gerenciamentoGanhoAcomodacaoService.create(
      createGerenciamentoGanhoAcomodacaoDto,
    );
  }

  @Get()
  findAll(@Body() findAllGerenciamentoGanhoAcomodacaoDto: any) {
    return this.gerenciamentoGanhoAcomodacaoService.findAll(
      findAllGerenciamentoGanhoAcomodacaoDto,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gerenciamentoGanhoAcomodacaoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateGerenciamentoGanhoAcomodacaoDto: UpdateGerenciamentoGanhoAcomodacaoDto,
  ) {
    return this.gerenciamentoGanhoAcomodacaoService.update(
      +id,
      updateGerenciamentoGanhoAcomodacaoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gerenciamentoGanhoAcomodacaoService.remove(+id);
  }
}

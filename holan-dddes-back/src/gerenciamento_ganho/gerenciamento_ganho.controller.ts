import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GerenciamentoGanhoService } from './gerenciamento_ganho.service';
import { CreateGerenciamentoGanhoDto } from './dto/create-gerenciamento_ganho.dto';
import { UpdateGerenciamentoGanhoDto } from './dto/update-gerenciamento_ganho.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('gerenciamento_ganho')
@Controller('gerenciamento-ganho')
export class GerenciamentoGanhoController {
  constructor(
    private readonly gerenciamentoGanhoService: GerenciamentoGanhoService,
  ) {}

  @Post()
  create(@Body() createGerenciamentoGanhoDto: CreateGerenciamentoGanhoDto) {
    return this.gerenciamentoGanhoService.create(createGerenciamentoGanhoDto);
  }

  @Get()
  findAll(@Body() findAllGerenciamentoGanhoDto: any) {
    return this.gerenciamentoGanhoService.findAll(findAllGerenciamentoGanhoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gerenciamentoGanhoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGerenciamentoGanhoDto: UpdateGerenciamentoGanhoDto,
  ) {
    return this.gerenciamentoGanhoService.update(
      +id,
      updateGerenciamentoGanhoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gerenciamentoGanhoService.remove(+id);
  }
}

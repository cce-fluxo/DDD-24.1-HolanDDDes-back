import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComodidadeAcomodacoesService } from './comodidade_acomodacoes.service';
import { CreateComodidadeAcomodacoeDto } from './dto/create-comodidade_acomodacoe.dto';
import { UpdateComodidadeAcomodacoeDto } from './dto/update-comodidade_acomodacoe.dto';

@Controller('comodidade-acomodacoes')
export class ComodidadeAcomodacoesController {
  constructor(
    private readonly comodidadeAcomodacoesService: ComodidadeAcomodacoesService,
  ) {}

  @Post()
  create(@Body() createComodidadeAcomodacoeDto: CreateComodidadeAcomodacoeDto) {
    return this.comodidadeAcomodacoesService.create(
      createComodidadeAcomodacoeDto,
    );
  }

  @Get()
  findAll(@Body() findAllComodidadeAcomodacoeDto: any) {
    return this.comodidadeAcomodacoesService.findAll(
      findAllComodidadeAcomodacoeDto,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comodidadeAcomodacoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComodidadeAcomodacoeDto: UpdateComodidadeAcomodacoeDto,
  ) {
    return this.comodidadeAcomodacoesService.update(
      +id,
      updateComodidadeAcomodacoeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comodidadeAcomodacoesService.remove(+id);
  }
}

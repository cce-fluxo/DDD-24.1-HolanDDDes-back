import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoAcomodacoesService } from './tipo_acomodacoes.service';
import { CreateTipoAcomodacoeDto } from './dto/create-tipo_acomodacoe.dto';
import { UpdateTipoAcomodacoeDto } from './dto/update-tipo_acomodacoe.dto';

@Controller('tipo-acomodacoes')
export class TipoAcomodacoesController {
  constructor(
    private readonly tipoAcomodacoesService: TipoAcomodacoesService,
  ) {}

  @Post()
  create(@Body() createTipoAcomodacoeDto: CreateTipoAcomodacoeDto) {
    return this.tipoAcomodacoesService.create(createTipoAcomodacoeDto);
  }

  @Get()
  findAll(@Body() findAllTipoAcomodacoeDto: any) {
    return this.tipoAcomodacoesService.findAll(findAllTipoAcomodacoeDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoAcomodacoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoAcomodacoeDto: UpdateTipoAcomodacoeDto,
  ) {
    return this.tipoAcomodacoesService.update(+id, updateTipoAcomodacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoAcomodacoesService.remove(+id);
  }
}

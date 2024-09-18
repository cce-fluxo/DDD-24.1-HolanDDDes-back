import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { tipoAcomodacaosService } from './tipo_acomodacoes.service';
import { CreatetipoAcomodacaoDto } from './dto/create-tipo_acomodacoe.dto';
import { UpdatetipoAcomodacaoDto } from './dto/update-tipo_acomodacoe.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tipo_acomodacoes')
@Controller('tipo-acomodacoes')
export class tipoAcomodacaosController {
  constructor(
    private readonly tipoAcomodacaosService: tipoAcomodacaosService,
  ) {}

  @Post()
  create(@Body() createtipoAcomodacaoDto: CreatetipoAcomodacaoDto) {
    return this.tipoAcomodacaosService.create(createtipoAcomodacaoDto);
  }

  @Get()
  findAll(@Body() findAlltipoAcomodacaoDto: any) {
    return this.tipoAcomodacaosService.findAll(findAlltipoAcomodacaoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoAcomodacaosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatetipoAcomodacaoDto: UpdatetipoAcomodacaoDto,
  ) {
    return this.tipoAcomodacaosService.update(+id, updatetipoAcomodacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoAcomodacaosService.remove(+id);
  }
}

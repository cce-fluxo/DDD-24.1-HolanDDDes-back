import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DescricaoDetalhadaService } from './descricao_detalhada.service';
import { CreateDescricaoDetalhadaDto } from './dto/create-descricao_detalhada.dto';
import { UpdateDescricaoDetalhadaDto } from './dto/update-descricao_detalhada.dto';

@Controller('descricao-detalhada')
export class DescricaoDetalhadaController {
  constructor(
    private readonly descricaoDetalhadaService: DescricaoDetalhadaService,
  ) {}

  @Post()
  create(@Body() createDescricaoDetalhadaDto: CreateDescricaoDetalhadaDto) {
    return this.descricaoDetalhadaService.create(createDescricaoDetalhadaDto);
  }

  @Get()
  findAll(@Body() findAllDescricaoDetalhadaDto: any) {
    return this.descricaoDetalhadaService.findAll(findAllDescricaoDetalhadaDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.descricaoDetalhadaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDescricaoDetalhadaDto: UpdateDescricaoDetalhadaDto,
  ) {
    return this.descricaoDetalhadaService.update(
      +id,
      updateDescricaoDetalhadaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.descricaoDetalhadaService.remove(+id);
  }
}

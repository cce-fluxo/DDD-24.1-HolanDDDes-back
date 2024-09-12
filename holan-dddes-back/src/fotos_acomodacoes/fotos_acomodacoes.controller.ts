import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FotosAcomodacoesService } from './fotos_acomodacoes.service';
import { CreateFotosAcomodacoeDto } from './dto/create-fotos_acomodacoe.dto';
import { UpdateFotosAcomodacoeDto } from './dto/update-fotos_acomodacoe.dto';

@Controller('fotos-acomodacoes')
export class FotosAcomodacoesController {
  constructor(
    private readonly fotosAcomodacoesService: FotosAcomodacoesService,
  ) {}

  @Post()
  create(@Body() createFotosAcomodacoeDto: CreateFotosAcomodacoeDto) {
    return this.fotosAcomodacoesService.create(createFotosAcomodacoeDto);
  }

  @Get()
  findAll(@Body() findAllFotosAcomodacoeDto: any) {
    return this.fotosAcomodacoesService.findAll(findAllFotosAcomodacoeDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fotosAcomodacoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFotosAcomodacoeDto: UpdateFotosAcomodacoeDto,
  ) {
    return this.fotosAcomodacoesService.update(+id, updateFotosAcomodacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fotosAcomodacoesService.remove(+id);
  }
}

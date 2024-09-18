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
import { CreateFotosAcomodacaoDto } from './dto/create-fotos_acomodacoe.dto';
import { UpdateFotosAcomodacaoDto } from './dto/update-fotos_acomodacoe.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fotos_acomodacoes')
@Controller('fotos-acomodacoes')
export class FotosAcomodacoesController {
  constructor(
    private readonly fotosAcomodacoesService: FotosAcomodacoesService,
  ) {}

  @Post()
  create(@Body() CreateFotosAcomodacaoDto: CreateFotosAcomodacaoDto) {
    return this.fotosAcomodacoesService.create(CreateFotosAcomodacaoDto);
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
    @Body() UpdateFotosAcomodacaoDto: UpdateFotosAcomodacaoDto,
  ) {
    return this.fotosAcomodacoesService.update(+id, UpdateFotosAcomodacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fotosAcomodacoesService.remove(+id);
  }
}

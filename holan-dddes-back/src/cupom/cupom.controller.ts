import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CupomService } from './cupom.service';
import { CreateCupomDto } from './dto/create-cupom.dto';
import { UpdateCupomDto } from './dto/update-cupom.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('cupom')
@Controller('cupom')
export class CupomController {
  constructor(private readonly cupomService: CupomService) {}

  @Post()
  create(@Body() createCupomDto: CreateCupomDto) {
    return this.cupomService.create(createCupomDto);
  }

  @Get()
  findAll(@Body() findAllCupomDto: any) {
    return this.cupomService.findAll(findAllCupomDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cupomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCupomDto: UpdateCupomDto) {
    return this.cupomService.update(+id, updateCupomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cupomService.remove(+id);
  }

  //Rota específica para buscar as acomodações de um hotel já especificado
  @Get(':id/clientes')
  @ApiOperation({
    summary: 'Busca os clientes que podem usar o cupom',
    description: 'Busca os clientes que podem usar um cupom já especificado com base no id fornecido',
  })
  findClientes(@Param('id') id: string) {
    return this.cupomService.findClientes(+id);
  }

  @Get(':id/hoteis')
  @ApiOperation({
    summary: 'Busca os hoteis que podem usar o cupom',
    description: 'Busca os hoteis que podem usar um cupom já especificado com base no id fornecido',
  })
  findHoteis(@Param('id') id: string) {
    return this.cupomService.findHoteis(+id);
  }
}

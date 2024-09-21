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
  @ApiOperation({
    summary: 'Cria um novo cupom',
    description: 'Cria um novo cupom com base nos dados fornecidos',
  })
  create(@Body() createCupomDto: CreateCupomDto) {
    return this.cupomService.create(createCupomDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todos os cupons',
    description: 'Busca todos os cupons com base nos filtros fornecidos',
  })
  findAll(@Body() findAllCupomDto: any) {
    return this.cupomService.findAll(findAllCupomDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca um cupom específico',
    description: 'Busca um cupom específico com base no id fornecido',
  })
  findOne(@Param('id') id: number) {
    return this.cupomService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um cupom',
    description: 'Atualiza um cupom com base no id fornecido e nos dados fornecidos',
  })
  update(@Param('id') id: number, @Body() updateCupomDto: UpdateCupomDto) {
    return this.cupomService.update(+id, updateCupomDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove um cupom',
    description: 'Remove um cupom com base no id fornecido',
  })
  remove(@Param('id') id: number) {
    return this.cupomService.remove(+id);
  }

  //Rotas especificas do cupom
  @Get(':id/clientes')
  @ApiOperation({
    summary: 'Busca os clientes que podem usar o cupom',
    description: 'Busca os clientes que podem usar um cupom já especificado com base no id fornecido',
  })
  findClientes(@Param('id') id: number) {
    return this.cupomService.findClientes(+id);
  }

  @Get(':id/hoteis')
  @ApiOperation({
    summary: 'Busca os hoteis que podem usar o cupom',
    description: 'Busca os hoteis que podem usar um cupom já especificado com base no id fornecido',
  })
  findHoteis(@Param('id') id: number) {
    return this.cupomService.findHoteis(+id);
  }
}

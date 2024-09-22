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
  getClientes(@Param('id') id: number) {
    return this.cupomService.getClientesByCupom(+id);
  }

  //Rota específica para associar uma cliente a um cupom
  @Post(':id/clientes')
  @ApiOperation({
    summary: 'Conecta um cliente a um cupom',
    description: 'Associa a um cupom já especificado com base no id fornecido',
  })
  createCliente(@Param('id') id: number, @Body('clienteId') clienteId: number) {
    return this.cupomService.createClienteCupom(+id, +clienteId);
  }

  @Get(':id/clientes/:clienteId')
  @ApiOperation({
    summary: 'Busca uma cliente relacionado a um cupom',
    description: 'Busca um cliente que pode usar um cupom já especificado com base no id fornecido',
  })
  findCliente(@Param('id') id: number, @Param('clienteId') clienteId: number) {
    return this.cupomService.findCliente(+id, +clienteId);
  }

  @Delete(':id/clientes/:clienteId')
  @ApiOperation({
    summary: 'Remove uma relação cliente e cupom',
    description: 'Remove uma cliente de um cupom já especificado com base no id fornecido',
  })
  removecliente(@Param('id') id: string, @Param('clienteId') clienteId: string) {
    return this.cupomService.removeCliente(+id, +clienteId);
  }

  @Get(':id/hoteis')
  @ApiOperation({
    summary: 'Busca os hoteis que podem usar o cupom',
    description: 'Busca os hoteis que podem usar um cupom já especificado com base no id fornecido',
  })
  getHoteis(@Param('id') id: number) {
    return this.cupomService.getHoteisByCupom(+id);
  }

  //Rota específica para associar um hotel a um cupom
  @Post(':id/hotel')
  @ApiOperation({
    summary: 'Conecta uma hotel a um cupom',
    description: 'Associa a um cupom já especificado com base no id fornecido',
  })
  createHotel(@Param('id') id: number, @Body('hotelId') hotelId: number) {
    return this.cupomService.createHotelCupom(+id, +hotelId);
  }

  @Get(':id/hoteis/:hotelId')
  @ApiOperation({
    summary: 'Busca um hotel relacionado a um cupom',
    description: 'Busca um hotel que pode usar um cupom já especificado com base no id fornecido',
  })
  findHotel(@Param('id') id: number, @Param('hotelId') hotelId: number) {
    return this.cupomService.findHotel(+id, +hotelId);
  }

  @Delete(':id/hoteis/:hotelId')
  @ApiOperation({
    summary: 'Remove uma relação hotel e cupom',
    description: 'Remove uma hotel de um cupom já especificado com base no id fornecido',
  })
  removeHotel(@Param('id') id: string, @Param('hotelId') hotelId: string) {
    return this.cupomService.removeHotel(+id, +hotelId);
  }
}



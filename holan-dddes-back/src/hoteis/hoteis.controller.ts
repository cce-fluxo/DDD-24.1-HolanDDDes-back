/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { hotelsService } from './hoteis.service';
import { CreatehotelDto } from './dto/create-hotei.dto';
import { UpdatehotelDto } from './dto/update-hotei.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';

@ApiTags('hoteis')
@Controller('hotels')
export class HoteisController {
  constructor(private readonly hotelsService: hotelsService) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('proprietario', 'admin')

  @ApiOperation({
    summary: 'Cria um novo hotel',
    description: 'Cria um novo hotel com base nos dados fornecidos',
  })
  create(@Body() createhotelDto: CreatehotelDto) {
    return this.hotelsService.create(createhotelDto);
  }

  @Get()
  @IsPublic()
  @ApiOperation({
    summary: 'Busca todos os hoteis',
    description: 'Busca todos os hoteis com base nos filtros fornecidos',
  })
  findAll(@Body() findAllhotelDto: any) {
    return this.hotelsService.findAll(findAllhotelDto);
  }

  @Get(':id') // todos podem acessar
  @ApiOperation({
    summary: 'Busca um hotel específico',
    description: 'Busca um hotel específico com base no id fornecido',
  })
  findOne(@Param('id') id: string) {
    return this.hotelsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('proprietario', 'admin')
  @ApiOperation({
    summary: 'Atualiza um hotel',
    description: 'Atualiza um hotel com base no id fornecido e nos dados fornecidos',
  })
  update(@Param('id') id: string, @Body() updatehotelDto: UpdatehotelDto) {
    return this.hotelsService.update(+id, updatehotelDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('proprietario', 'admin')
  @ApiOperation({
    summary: 'Remove um hotel',
    description: 'Remove um hotel com base no id fornecido',
  })
  remove(@Param('id') id: string) {
    return this.hotelsService.remove(+id);
  }

  //Rota específica para buscar as acomodações de um hotel já especificado
  @Get(':id/acomodacoes') // todos podem acessar
  @ApiOperation({
    summary: 'Busca as acomodações de um hotel',
    description: 'Busca as acomodações de um hotel já especificado com base no id fornecido',
  })
  findAcomodacoes(@Param('id') id: string) {
    return this.hotelsService.findAcomodacoes(+id);
  }

  //Rota específica para buscar as comodidades de um hotel já especificado
  @Get(':id/comodidade') // todos podem acessar
  @ApiOperation({
    summary: 'Busca as comodidades de um hotel',
    description: 'Busca as comodidades de um hotel já especificado com base no id fornecido',
  })
  getComodidades(@Param('id') id: number) {
    return this.hotelsService.getComodidadesByHotel(+id);
  }

  //Rota específica para associar uma comodidade a um hotel
  @Post(':id/comodidade')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('proprietario', 'admin')
  @ApiOperation({
    summary: 'Conecta uma comodidade a um hotel',
    description: 'Associa a um hotel já especificado com base no id fornecido',
  })
  createComodidade(@Param('id') id: string, @Body('comodidadeId') comodidadeId: string) {
    return this.hotelsService.createComodidadeHotel(+id, +comodidadeId);
  }

  @Get(':id/comodidade/:comodidadeId') // todos logados podem acessar
  @ApiOperation({
    summary: 'Busca uma comodidade de um hotel',
    description: 'Busca uma comodidade de um hotel já especificado com base no id fornecido',
  })
  findComodidade(@Param('id') id: string, @Param('comodidadeId') comodidadeId: string) {
    return this.hotelsService.findComodidade(+id, +comodidadeId);
  }

  @Delete(':id/comodidade/:comodidadeId')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('proprietario', 'admin')
  @ApiOperation({
    summary: 'Remove uma comodidade de um hotel',
    description: 'Remove uma comodidade de um hotel já especificado com base no id fornecido',
  })
  removeComodidade(@Param('id') id: string, @Param('comodidadeId') comodidadeId: string) {
    return this.hotelsService.removeComodidade(+id, +comodidadeId);
  }
  //Rota específica para buscar as fotos de um hotel já especificado
  @Get(':id/fotos') // todos podem acessar
  @ApiOperation({
    summary: 'Busca as fotos de um hotel',
    description: 'Busca as fotos de um hotel já especificado com base no id fornecido',
  })
  findFoto(@Param('id') id: string) {
    return this.hotelsService.findFoto(+id);
  }

  //Rota específica para buscar as avaliações de um hotel já especificado
  @Get(':id/avaliacoes') // todos podem acessar
  @ApiOperation({
    summary: 'Busca as avaliações de um hotel',
    description: 'Busca as avaliações de um hotel já especificado com base no id fornecido',
  })
  findAvaliacoes(@Param('id') id: string) {
    return this.hotelsService.findAvaliacoes(+id);
  }
}

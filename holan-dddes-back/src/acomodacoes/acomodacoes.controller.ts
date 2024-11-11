/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AcomodacoesService } from './acomodacoes.service';
import { CreateAcomodacoeDto } from './dto/create-acomodacoe.dto';
import { UpdateAcomodacoeDto } from './dto/update-acomodacoe.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('acomodacoes')
@Controller('acomodacoes')
export class AcomodacoesController {
  constructor(private readonly acomodacoesService: AcomodacoesService) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  @ApiOperation({
    summary: 'Posta um quartos',
    description: 'Posta um quarto com base nos dados fornecidos',
  })
  create(@Body() createAcomodacoeDto: CreateAcomodacoeDto, @Req() req) {
    return this.acomodacoesService.create(createAcomodacoeDto, +req.user.id);
  }

  @Get(':id/avaliacoes')
  //  todos podem fazer isso
  @ApiOperation({
    summary: 'Busca todas as avaliações',
    description: 'Busca todas as avaliações com base nos filtros fornecidos',
  })
  async obterAvaliacoesAcomodacao(@Param('id') id: number) {
    // Chama o serviço para obter a acomodação com as avaliações
    return this.acomodacoesService.findAvaliacao(id);
  }

  @Get(':id/fotos')
  @ApiOperation({
    summary: 'Busca todas as fotos',
    description: 'Busca todas as fotos com base nos filtros fornecidos',
  })
  async obterAvaliacoesFotos(@Param('id') id: number) {
    // Chama o serviço para obter a acomodação com as avaliações
    return this.acomodacoesService.findFoto(id);
  }

  @Get(':id/comodidades') // todos podem acessar
  @ApiOperation({
    summary: 'Busca todas as comodidades',
    description: 'Busca todas as comodidades com base nos filtros fornecidos',
  })
  async obterAvaliacoesComodidades(@Param('id') id: number) {
    // Chama o serviço para obter a acomodação com as avaliações
    return this.acomodacoesService.findComodidade(id);
  }

  // esse depende de um hotelID, automatizei
  @Get() // todos podem acessar
  @ApiOperation({
    summary: 'Busca todas as acomodações',
    description: 'Busca todas as acomodações com base nos filtros fornecidos',
  })
  findAll(@Req() req) {
    return this.acomodacoesService.findAll(+req.user.id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca uma acomodação específica e suas fotos',
    description: 'Busca uma acomodação específica com base no id fornecido',
  })
  findOne(@Param('id') id: string) {
    return this.acomodacoesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  update(
    @Param('id') id: string,
    @Body() updateAcomodacoeDto: UpdateAcomodacoeDto,
  ) {
    return this.acomodacoesService.update(+id, updateAcomodacoeDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  remove(@Param('id') id: string) {
    return this.acomodacoesService.remove(+id);
  }
}


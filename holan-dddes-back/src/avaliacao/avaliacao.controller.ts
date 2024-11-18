/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('avaliacao')
@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'cliente')
  @ApiOperation({
    summary: 'Cria uma nova avaliação',
    description: 'Cria uma nova avaliação com base nos dados fornecidos',
  })
  create(@Body() createAvaliacaoDto: CreateAvaliacaoDto) {
    return this.avaliacaoService.create(createAvaliacaoDto);
  }

  @Get() // todos podem acessar
  @ApiOperation({
    summary: 'Busca todas as avaliações',
    description: 'Busca todas as avaliações com base nos filtros fornecidos',
  })
  findAll(findAllAvaliacaoDto?: any) {
    return this.avaliacaoService.findAll(findAllAvaliacaoDto);
  }

  // @Get(':id')  // todos podem acessar
  // @ApiOperation({
  //   summary: 'Busca uma avaliação específica',
  //   description: 'Busca uma avaliação específica com base no id fornecido',
  // })
  // findOne(@Param('id') id: string) {
  //   return this.avaliacaoService.findOne(+id);
  // }

  @Patch(':id') 
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'cliente')
  @ApiOperation({
    summary: 'Atualiza uma avaliação',
    description: 'Atualiza uma avaliação com base no id fornecido e nos dados fornecidos',
  })
  update(
    @Param('id') id: string,
    @Body() updateAvaliacaoDto: UpdateAvaliacaoDto,
  ) {
    return this.avaliacaoService.update(+id, updateAvaliacaoDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'cliente')
  @ApiOperation({
    summary: 'Remove uma avaliação',
    description: 'Remove uma avaliação com base no id fornecido',
  })
  remove(@Param('id') id: string) {
    return this.avaliacaoService.remove(+id);
  }

  @Get('/avaliacoes')
  @ApiOperation({
    summary: "Resgata todas as avaliações que um hotel recebeu",
    description: 'Busca as avaliações de um hotel já especificado com base no id fornecido',
  })
  getAvaliacoes(@Req() req) {
    return this.avaliacaoService.getAvaliacoes(+req.user.id);
  }
}

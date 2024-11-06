import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { DescricaoDetalhadaService } from './descricao_detalhada.service';
import { CreateDescricaoDetalhadaDto } from './dto/create-descricao_detalhada.dto';
import { UpdateDescricaoDetalhadaDto } from './dto/update-descricao_detalhada.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('descricao_detalhada')
@Controller('descricao-detalhada')
export class DescricaoDetalhadaController {
  constructor(
    private readonly descricaoDetalhadaService: DescricaoDetalhadaService,
  ) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  @ApiOperation({
    summary: 'Cria uma nova descrição detalhada',
    description:
      'Cria uma nova descrição detalhada com base nos dados fornecidos',
  })
  create(
    @Body() createDescricaoDetalhadaDto: CreateDescricaoDetalhadaDto,
    @Req() req,
  ) {
    return this.descricaoDetalhadaService.create(
      createDescricaoDetalhadaDto,
      +req.user.id,
    );
  }

  @Get() // todos podem acessar
  @ApiOperation({
    summary: 'Busca todas as descrições detalhadas',
    description:
      'Busca todas as descrições detalhadas com base nos filtros fornecidos',
  })
  findAll(@Body() findAllDescricaoDetalhadaDto: any) {
    return this.descricaoDetalhadaService.findAll(findAllDescricaoDetalhadaDto);
  }

  @Get(':id') // todos podem acessar
  @ApiOperation({
    summary: 'Busca uma descrição detalhada específica',
    description:
      'Busca uma descrição detalhada específica com base no id fornecido',
  })
  findOne(@Param('id') id: string) {
    return this.descricaoDetalhadaService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  @ApiOperation({
    summary: 'Atualiza uma descrição detalhada',
    description:
      'Atualiza uma descrição detalhada com base no id fornecido e nos dados fornecidos',
  })
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
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  @ApiOperation({
    summary: 'Remove uma descrição detalhada',
    description: 'Remove uma descrição detalhada com base no id fornecido',
  })
  remove(@Param('id') id: string) {
    return this.descricaoDetalhadaService.remove(+id);
  }
}

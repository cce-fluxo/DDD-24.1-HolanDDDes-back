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
import { comodidadesHotelsService } from './comodidades_hoteis.service';
import { CreateComodidadesHotelDto } from './dto/create-comodidades_hotei.dto';
import { UpdateComodidadesHotelDto } from './dto/update-comodidades_hotei.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';

@ApiTags('comodidade_hoteis')
@Controller('comodidades-hoteis')
export class ComodidadesHoteisController {
  constructor(
    private readonly comodidadesHotelsService: comodidadesHotelsService,
  ) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin')
  @ApiOperation({
    summary: 'Cria uma nova comodidade de hotel',
    description: 'Cria uma nova comodidade de hotel com base nos dados fornecidos',
  })
  create(@Body() createComodidadesHoteiDto: CreateComodidadesHotelDto) {
    return this.comodidadesHotelsService.create(createComodidadesHoteiDto);
  }

  @Get() // todos podem acessar
  @ApiOperation({
    summary: 'Busca todas as comodidades de hotel',
    description: 'Busca todas as comodidades de hotel com base nos filtros fornecidos',
  })
  findAll(@Body() findAllComodidadesHoteiDto: any) {
    return this.comodidadesHotelsService.findAll(findAllComodidadesHoteiDto);
  }

  @Get(':id') // todos podem acessar
  @ApiOperation({
    summary: 'Busca uma comodidade de hotel específica',
    description: 'Busca uma comodidade de hotel específica com base no id fornecido',
  })
  findOne(@Param('id') id: string) {
    return this.comodidadesHotelsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin') //somente o administrador pode alterar comodidades de hotel
  @ApiOperation({
    summary: 'Atualiza uma comodidade de hotel',
    description: 'Atualiza uma comodidade de hotel com base no id fornecido e nos dados fornecidos',  
  })
  update(
    @Param('id') id: string,
    @Body() UpdateComodidadesHotelDto: UpdateComodidadesHotelDto,
  ) {
    return this.comodidadesHotelsService.update(+id, UpdateComodidadesHotelDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin') //somente o administrador pode deletar comodidades de hotel
  @ApiOperation({
    summary: 'Remove uma comodidade de hotel',
    description: 'Remove uma comodidade de hotel com base no id fornecido',
  })
  remove(@Param('id') id: string) {
    return this.comodidadesHotelsService.remove(+id);
  }
}

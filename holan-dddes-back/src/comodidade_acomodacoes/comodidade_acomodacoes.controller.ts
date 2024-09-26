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
import { ComodidadeAcomodacoesService } from './comodidade_acomodacoes.service';
import { CreateComodidadeAcomodacoeDto } from './dto/create-comodidade_acomodacoe.dto';
import { UpdateComodidadeAcomodacoeDto } from './dto/update-comodidade_acomodacoe.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('comodidade_acomodacoes')
@Controller('comodidade-acomodacoes')
export class ComodidadeAcomodacoesController {
  constructor(
    private readonly comodidadeAcomodacoesService: ComodidadeAcomodacoesService,
  ) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  create(@Body() createComodidadeAcomodacoeDto: CreateComodidadeAcomodacoeDto) {
    return this.comodidadeAcomodacoesService.create(
      createComodidadeAcomodacoeDto,
    );
  }

  @Get() // todos podem acessar
  findAll(@Body() findAllComodidadeAcomodacoeDto: any) {
    return this.comodidadeAcomodacoesService.findAll(
      findAllComodidadeAcomodacoeDto,
    );
  }

  @Get(':id') // todos podem acessar
  findOne(@Param('id') id: string) {
    return this.comodidadeAcomodacoesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  update(
    @Param('id') id: string,
    @Body() updateComodidadeAcomodacoeDto: UpdateComodidadeAcomodacoeDto,
  ) {
    return this.comodidadeAcomodacoesService.update(
      +id,
      updateComodidadeAcomodacoeDto,
    );
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  remove(@Param('id') id: string) {
    return this.comodidadeAcomodacoesService.remove(+id);
  }
}

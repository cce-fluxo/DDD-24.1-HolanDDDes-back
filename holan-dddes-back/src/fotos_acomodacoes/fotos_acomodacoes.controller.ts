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
import { FotosAcomodacoesService } from './fotos_acomodacoes.service';
import { CreateFotosAcomodacaoDto } from './dto/create-fotos_acomodacoe.dto';
import { UpdateFotosAcomodacaoDto } from './dto/update-fotos_acomodacoe.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('fotos_acomodacoes')
@Controller('fotos-acomodacoes')
export class FotosAcomodacoesController {
  constructor(
    private readonly fotosAcomodacoesService: FotosAcomodacoesService,
  ) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  create(@Body() CreateFotosAcomodacaoDto: CreateFotosAcomodacaoDto) {
    return this.fotosAcomodacoesService.create(CreateFotosAcomodacaoDto);
  }

  @Get() // todos podem acessar
  findAll(@Body() findAllFotosAcomodacoeDto: any) {
    return this.fotosAcomodacoesService.findAll(findAllFotosAcomodacoeDto);
  }

  @Get(':id') // todos podem acessar
  findOne(@Param('id') id: string) {
    return this.fotosAcomodacoesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  update(
    @Param('id') id: string,
    @Body() UpdateFotosAcomodacaoDto: UpdateFotosAcomodacaoDto,
  ) {
    return this.fotosAcomodacoesService.update(+id, UpdateFotosAcomodacaoDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  remove(@Param('id') id: string) {
    return this.fotosAcomodacoesService.remove(+id);
  }
}

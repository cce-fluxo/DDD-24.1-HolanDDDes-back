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
import { GerenciamentoGanhoAcomodacaoService } from './gerenciamento_ganho_acomodacao.service';
import { CreateGerenciamentoGanhoAcomodacaoDto } from './dto/create-gerenciamento_ganho_acomodacao.dto';
import { UpdateGerenciamentoGanhoAcomodacaoDto } from './dto/update-gerenciamento_ganho_acomodacao.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';

@ApiTags('gerenciamento_ganho_acomodacao')
@Controller('gerenciamento-ganho-acomodacao')
export class GerenciamentoGanhoAcomodacaoController {
  constructor(
    private readonly gerenciamentoGanhoAcomodacaoService: GerenciamentoGanhoAcomodacaoService,
  ) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  create(
    @Body()
    createGerenciamentoGanhoAcomodacaoDto: CreateGerenciamentoGanhoAcomodacaoDto,
  ) {
    return this.gerenciamentoGanhoAcomodacaoService.create(
      createGerenciamentoGanhoAcomodacaoDto,
    );
  }

  @Get()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  findAll(@Body() findAllGerenciamentoGanhoAcomodacaoDto: any) {
    return this.gerenciamentoGanhoAcomodacaoService.findAll(
      findAllGerenciamentoGanhoAcomodacaoDto,
    );
  }

  @Get(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  findOne(@Param('id') id: string) {
    return this.gerenciamentoGanhoAcomodacaoService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  update(
    @Param('id') id: string,
    @Body()
    updateGerenciamentoGanhoAcomodacaoDto: UpdateGerenciamentoGanhoAcomodacaoDto,
  ) {
    return this.gerenciamentoGanhoAcomodacaoService.update(
      +id,
      updateGerenciamentoGanhoAcomodacaoDto,
    );
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  remove(@Param('id') id: string) {
    return this.gerenciamentoGanhoAcomodacaoService.remove(+id);
  }
}

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
import { AvaliacaoAcomodacoesService } from './avaliacao_acomodacoes.service';
import { CreateAvaliacaoAcomodacoeDto } from './dto/create-avaliacao_acomodacoe.dto';
import { UpdateAvaliacaoAcomodacoeDto } from './dto/update-avaliacao_acomodacoe.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('avaliacao_acomodacoes')
@Controller('avaliacao-acomodacoes')
export class AvaliacaoAcomodacoesController {
  constructor(
    private readonly avaliacaoAcomodacoesService: AvaliacaoAcomodacoesService,
  ) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'cliente')
  create(@Body() createAvaliacaoAcomodacoeDto: CreateAvaliacaoAcomodacoeDto) {
    return this.avaliacaoAcomodacoesService.create(
      createAvaliacaoAcomodacoeDto,
    );
  }

  @Get() // todos logados podem acessar
  findAll() {
    const findAllAvaliacaoAcomodacoeDto = {}; // Cria um objeto vazio
    return this.avaliacaoAcomodacoesService.findAll(
      findAllAvaliacaoAcomodacoeDto,
    );
  }

  @Get(':id') // todos logados podem acessar
  findOne(@Param('id') id: string) {
    return this.avaliacaoAcomodacoesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'cliente')
  update(
    @Param('id') id: string,
    @Body() updateAvaliacaoAcomodacoeDto: UpdateAvaliacaoAcomodacoeDto,
  ) {
    return this.avaliacaoAcomodacoesService.update(
      +id,
      updateAvaliacaoAcomodacoeDto,
    );
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'cliente')
  remove(@Param('id') id: string) {
    return this.avaliacaoAcomodacoesService.remove(+id);
  }
}

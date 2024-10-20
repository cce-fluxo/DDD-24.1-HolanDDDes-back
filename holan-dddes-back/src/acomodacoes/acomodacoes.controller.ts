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
import { AcomodacoesService } from './acomodacoes.service';
import { CreateAcomodacoeDto } from './dto/create-acomodacoe.dto';
import { UpdateAcomodacoeDto } from './dto/update-acomodacoe.dto';
import { ApiTags } from '@nestjs/swagger';
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
  create(@Body() createAcomodacoeDto: CreateAcomodacoeDto) {
    return this.acomodacoesService.create(createAcomodacoeDto);
  }

  @Get(':id/avaliacoes')
  async obterAvaliacoesAcomodacao(@Param('id') id: number) {
    // Chama o serviço para obter a acomodação com as avaliações
    return this.acomodacoesService.findAvaliacao(id);
  }

  @Get(':id/fotos')
  async obterAvaliacoesFotos(@Param('id') id: number) {
    // Chama o serviço para obter a acomodação com as avaliações
    return this.acomodacoesService.findFoto(id);
  }

  @Get(':id/comodidades')
  async obterAvaliacoesComodidades(@Param('id') id: number) {
    // Chama o serviço para obter a acomodação com as avaliações
    return this.acomodacoesService.findComodidade(id);
  }

  @Get() // todos podem acessar
  findAll() {
    const findAllAcomaodacoesDto = {};
    return this.acomodacoesService.findAll(findAllAcomaodacoesDto);
  }

  @Get(':id') // todos podem acessar
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

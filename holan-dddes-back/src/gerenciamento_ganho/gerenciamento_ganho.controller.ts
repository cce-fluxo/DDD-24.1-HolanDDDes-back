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
import { GerenciamentoGanhoService } from './gerenciamento_ganho.service';
import { CreateGerenciamentoGanhoDto } from './dto/create-gerenciamento_ganho.dto';
import { UpdateGerenciamentoGanhoDto } from './dto/update-gerenciamento_ganho.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('gerenciamento_ganho')
@Controller('gerenciamento-ganho')
export class GerenciamentoGanhoController {
  constructor(
    private readonly gerenciamentoGanhoService: GerenciamentoGanhoService,
  ) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  create(@Body() createGerenciamentoGanhoDto: CreateGerenciamentoGanhoDto) {
    return this.gerenciamentoGanhoService.create(createGerenciamentoGanhoDto);
  }

  @Get()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  findAll(@Body() findAllGerenciamentoGanhoDto: any) {
    return this.gerenciamentoGanhoService.findAll(findAllGerenciamentoGanhoDto);
  }

  @Get(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  findOne(@Param('id') id: string) {
    return this.gerenciamentoGanhoService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  update(
    @Param('id') id: string,
    @Body() updateGerenciamentoGanhoDto: UpdateGerenciamentoGanhoDto,
  ) {
    return this.gerenciamentoGanhoService.update(
      +id,
      updateGerenciamentoGanhoDto,
    );
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  remove(@Param('id') id: string) {
    return this.gerenciamentoGanhoService.remove(+id);
  }
}

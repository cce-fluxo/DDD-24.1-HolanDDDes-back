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
  Req,
} from '@nestjs/common';
import { ProprietarioService } from './proprietario.service';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';

@ApiTags('proprietario')
@Controller('proprietario')
export class ProprietarioController {
  constructor(private readonly proprietarioService: ProprietarioService) {}

  @Post()
  @IsPublic() // todos podem criar um proprietário
  create(@Body() createProprietarioDto: CreateProprietarioDto) {
    return this.proprietarioService.create(createProprietarioDto);
  }


  @Get(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario') // somente o administrador e o proprietário podem ver suas informações
  findOne(@Param('id') id: string) {
    return this.proprietarioService.findOne(+id);
  }

  @Get()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario') // somente o administrador e o proprietário podem ver suas informações  
  async findMe(@Req() req) {
    return await this.proprietarioService.findMe(+req.user.id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario') // somente o administrador e o proprietário podem alterar suas informações
  update(
    @Param('id') id: string,
    @Body() updateProprietarioDto: UpdateProprietarioDto,
  ) {
    return this.proprietarioService.update(+id, updateProprietarioDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario') // somente o administrador e o proprietário podem deletar suas informações
  remove(@Param('id') id: string) {
    return this.proprietarioService.remove(+id);
  }
}

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
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';

@ApiTags('reservas')
@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'cliente') //somente o administrador e o cliente podem criar reserva
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservasService.create(createReservaDto);
  }

  @Get()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin')
  findAll(@Body() findAllReservaDto: any) {
    return this.reservasService.findAll(findAllReservaDto);
  }

  // @Get(':id') // todos podem acessar as reservas (precisamos definir que só usuário consegue acessar reservadas atreladas ao hotel ou ao cliente)
  // findOne(@Param('id') findOneReservaDto) {
  //   return this.reservasService.findOne(findOneReservaDto);
  // }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'cliente') //somente o administrador e o cliente podem alterar reserva
  update(@Param('id') id: string, @Body() updateReservaDto: UpdateReservaDto) {
    return this.reservasService.update(+id, updateReservaDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'cliente') //somente o administrador e o cliente podem deletar reserva
  remove(@Param('id') id: string) {
    return this.reservasService.remove(+id);
  }

  @Get('/hotel')
  @ApiOperation({
    summary: "Resgata todas as reservas que um hotel recebeu",
    description: 'Busca as reservas de um hotel já especificado com base no id do usuario fornecido',
  })
  getAvaliacoes(@Req() req) {
    return this.reservasService.getReservas(+req.user.id);
  }
}

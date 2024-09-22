import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotificacaoService } from './notificacao.service';
import { CreateNotificacaoDto } from './dto/create-notificacao.dto';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('notificacao')
@Controller('notificacao')
export class NotificacaoController {
  constructor(private readonly notificacaoService: NotificacaoService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria uma nova notificação',
    description: 'Cria uma nova notificação com base nos dados fornecidos',
  })
  create(@Body() createNotificacaoDto: CreateNotificacaoDto) {
    return this.notificacaoService.create(createNotificacaoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todas as notificações',
    description: 'Busca todas as notificações com base nos filtros fornecidos',
  })
  findAll(@Body() findAllNotificacaoDto: any) {
    return this.notificacaoService.findAll(findAllNotificacaoDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca uma notificação específica',
    description: 'Busca uma notificaçãoespecífica com base no id fornecido',
  })
  findOne(@Param('id') id: number) {
    return this.notificacaoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza uma notificação',
    description: 'Atualiza uma notificação com base no id fornecido e nos dados fornecidos',
  })
  update(
    @Param('id') id: number,
    @Body() updateNotificacaoDto: UpdateNotificacaoDto,
  ) {
    return this.notificacaoService.update(+id, updateNotificacaoDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove uma notificação',
    description: 'Remove uma notificação com base no id fornecido',
  })
  remove(@Param('id') id: number) {
    return this.notificacaoService.remove(+id);
  }
}

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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('notificacao')
@Controller('notificacao')
export class NotificacaoController {
  constructor(private readonly notificacaoService: NotificacaoService) {}

  @Post()
  create(@Body() createNotificacaoDto: CreateNotificacaoDto) {
    return this.notificacaoService.create(createNotificacaoDto);
  }

  @Get()
  findAll(@Body() findAllNotificacaoDto: any) {
    return this.notificacaoService.findAll(findAllNotificacaoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.notificacaoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateNotificacaoDto: UpdateNotificacaoDto,
  ) {
    return this.notificacaoService.update(+id, updateNotificacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.notificacaoService.remove(+id);
  }
}

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
import { NotificacaoService } from './notificacao.service';
import { CreateNotificacaoDto } from './dto/create-notificacao.dto';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';

@ApiTags('notificacao')
@Controller('notificacao')
export class NotificacaoController {
  constructor(private readonly notificacaoService: NotificacaoService) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin') //somente o administrador pode criar notificação
  @ApiOperation({
    summary: 'Cria uma nova notificação',
    description: 'Cria uma nova notificação com base nos dados fornecidos',
  })
  create(@Body() createNotificacaoDto: CreateNotificacaoDto) {
    return this.notificacaoService.create(createNotificacaoDto);
  }

  @Get()
  @UseGuards(RolesGuard, JwtAuthGuard)
  //@Roles('admin') //somente o administrador pode ver todas as notificações
  @ApiOperation({
    summary: 'Busca todas as notificações',
    description: 'Busca todas as notificações com base no id fornecido',
  })
  findAll(@Param('id') id: number) {
    return this.notificacaoService.findAll(id);
  }

  @Get(':id') // todos podem acessar suas próprias notificações
  @ApiOperation({
    summary: 'Busca uma notificação específica',
    description: 'Busca uma notificaçãoespecífica com base no id fornecido',
  })
  findOne(@Param('id') id: number) {
    return this.notificacaoService.findOne(+id);
  }

  @Patch(':id') // todos podem alterar notificações (o booleano de visualização)
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

  @Delete(':id') // todos podem deletar suas próprias notificações
  @ApiOperation({
    summary: 'Remove uma notificação',
    description: 'Remove uma notificação com base no id fornecido',
  })
  remove(@Param('id') id: number) {
    return this.notificacaoService.remove(+id);
  }
}

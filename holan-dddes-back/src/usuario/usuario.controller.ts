/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Req,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @IsPublic() //criação é pública, não precisa de permissão
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin') //somente o administrador pode ver TODOS os usuários
  findAll(@Body() findAllUsuarioDto: any) {
    return this.usuarioService.findAll(findAllUsuarioDto);
  }

  @Get('/idUsuario') // todos roles logados podem ver suas informações
  findOne(@Req() req) {
    return this.usuarioService.findOne(+req.user.id);
  }

  @Get('/idfoto') // todos roles logados podem ver suas informações
  findOneFoto(@Req() req) {
    return this.usuarioService.findOneFoto(+req.user.id);
  }

  @Patch(':id') // todos roles logados podem alterar suas informações
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id') // todos roles logados podem deletar seu próprio perfil
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}


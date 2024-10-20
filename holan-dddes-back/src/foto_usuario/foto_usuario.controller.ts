/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req,
  BadRequestException,
  UseGuards,
  Param,
} from '@nestjs/common';
import { ApiOperation,  ApiResponse,  ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';
import { FotoUsuarioService } from './foto_usuario.service';

@ApiTags("foto_usuario")
@Controller('foto-usuario')
export class FotoUsuarioController {
  constructor(private readonly fotoUsuarioService: FotoUsuarioService) {}

  @Get() // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Busca uma foto',
    description: 'Busca uma foto com base no id do usuário logado',
  })
  async getImage(@Req() req) {
    return await this.fotoUsuarioService.getImage(+req.user.id);
  }

  @Get(':id') // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Busca uma foto',
    description: 'Busca uma foto com base no id fornecido',
  })
  async getImageById(@Param('id') idFoto: number, @Req() req) {
    return await this.fotoUsuarioService.getFotoPerfilEspecifica(+req.user.id, idFoto);
  }

  @Post() // todos logados podem fazer isso
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Cria uma nova foto',
    description: 'Cria uma nova foto com base nos dados fornecidos',
  })
  @UseInterceptors(FileInterceptor('file')) // nome do arquivo no insomnia deve ser file
  @ApiResponse({ status: 201, description: 'Imagem salva com sucesso' })
  async createImage(@UploadedFile() file: Express.Multer.File, @Req() req) {
    console.log('Método createImage chamado'); // Log para verificar se o método está sendo chamado
    console.log('Arquivo recebido:', file); // Log para verificar se o arquivo está sendo recebido
    if (!file) {
      throw new BadRequestException('Nenhum arquivo foi enviado.');
    }
    return await this.fotoUsuarioService.create(file, +req.user.id);
  }

  @Patch(":id") // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Atualiza uma foto',
    description: 'Atualiza uma foto com base no id fornecido e nos dados fornecidos',
  })
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @UploadedFile() file: Express.Multer.File, 
    @Req() req,
    @Param('id') idFoto: number
  ) {
    return await this.fotoUsuarioService.update(file, +req.user.id, idFoto);
  }

  @Delete(":id") // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Remove uma foto',
    description: 'Remove uma foto com base no id fornecido',
  })
  async remove(@Param('id') idFoto: number, @Req() req) {
    const idUsuario = req.user.id;
    return await this.fotoUsuarioService.remove(idUsuario, idFoto);
  }
}

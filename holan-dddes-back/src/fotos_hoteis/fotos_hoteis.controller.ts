/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { fotosHotelsService } from './fotos_hoteis.service';
import { hotelsService } from '../hoteis/hoteis.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('fotos_hoteis')
@Controller('fotos-hoteis')
export class fotosHotelsController {
  constructor(private readonly fotosHotelsService: fotosHotelsService, 
    private readonly hotelsService: hotelsService) {}

  @Get() // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Busca uma foto',
    description: 'Busca uma foto com base no id do hotel',
  })
  async getImage(@Req() req) { 
    return await this.fotosHotelsService.getImage(+req.user.id);
  }

  @Post() // todos logados podem fazer isso
  @Roles('proprietario', 'admin')
  @UseGuards(RolesGuard, JwtAuthGuard)
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
     // Obtenha o ID
     const userId = +req.user.id;

     // Adicione a foto ao hotel
     return await this.fotosHotelsService.create(file, userId);
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
     // Verifica se o usuário está logado
    if (!req.user?.id) {
      throw new UnauthorizedException('Usuário não autenticado.');
    }

    // Verifica se o arquivo foi fornecido
    if (!file) {
      throw new BadRequestException('Arquivo de imagem não foi enviado.');
    }
    // o + é para ser um número
    return await this.fotosHotelsService.update(file, +req.user.id, idFoto);
  }

  @Delete(":id") // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Remove uma foto',
    description: 'Remove uma foto com base no id fornecido',
  })
  async remove(@Param('id') id: number) {
    return await this.fotosHotelsService.remove(id);
  }
}

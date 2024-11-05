/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FotosAcomodacoesService } from './fotos_acomodacoes.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('fotos_acomodacoes')
@Controller('fotos-acomodacoes')
export class FotosAcomodacoesController {
  constructor(
    private readonly fotosAcomodacoesService: FotosAcomodacoesService,
  ) {}

  @Get(':id') // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Busca uma foto',
    description: 'Busca uma foto com base no id fornecido',
  })
  async getImageById(@Param('id') idFoto: number) {
    return await this.fotosAcomodacoesService.getFotoAcomodacoeEspecifica(idFoto);
  }

  @Post(":id") // todos logados podem fazer isso
  // passando a id para identificar em que quarto é o POST
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Cria uma nova foto',
    description: 'Cria uma nova foto com base nos dados fornecidos',
  })
  @Roles('proprietario', 'admin')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file')) // nome do arquivo no insomnia deve ser file
  @ApiResponse({ status: 201, description: 'Imagem salva com sucesso' })
  async createImage(@UploadedFile() file: Express.Multer.File, @Param('id') idAcomodacao: number) {
    console.log('Método createImage chamado'); // Log para verificar se o método está sendo chamado
    console.log('Arquivo recebido:', file); // Log para verificar se o arquivo está sendo recebido
    if (!file) {
      throw new BadRequestException('Nenhum arquivo foi enviado.');
    }
    return await this.fotosAcomodacoesService.create(file, idAcomodacao);
  }

  @Patch(":id") // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Atualiza uma foto',
    description: 'Atualiza uma foto com base no id fornecido e nos dados fornecidos',
  })
  @UseInterceptors(FileInterceptor('file'))
  @Roles('proprietario', 'admin')
  @UseGuards(RolesGuard, JwtAuthGuard)
  async update(
    @UploadedFile() file: Express.Multer.File, 
    @Param('id') idFoto: number
  ) {
    return await this.fotosAcomodacoesService.update(file, idFoto);
  }

  @Delete(":id") // todos logados podem fazer isso
  @ApiOperation({
    summary: 'Remove uma foto',
    description: 'Remove uma foto com base no id fornecido',
  })
  async remove(@Param('id') idFoto: number) {
    return await this.fotosAcomodacoesService.remove(idFoto);
  }
}

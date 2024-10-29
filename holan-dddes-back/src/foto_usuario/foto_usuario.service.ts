/* eslint-disable prettier/prettier */
import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import toStream = require('buffer-to-stream'); //npm install buffer-to-stream @types/buffer-to-stream
import { FotoUsuario } from './entities/foto_usuario.entity';

@Injectable()
export class FotoUsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async upload(file: Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse> {
    console.log('File:', file); // Adicione esta linha
    return new Promise((resolve, reject) => {
      if (!file || !file.buffer) { // verificando se temos um arquivo
        return reject(new BadRequestException('Arquivo não foi enviado ou não está disponível.'));
      }
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) {
          console.error('Erro ao fazer upload no Cloudinary:', error);
          return reject(new BadRequestException('Erro ao fazer upload da imagem. Detalhes: ' + error.message));
        }
        resolve(result as UploadApiResponse);
      });

      toStream(file.buffer).pipe(upload);
    });
  }

  async atualizarFoto(userId: number, imageUrl: string, idCloudinary: string, idFoto: number) {
    try {
      // Verifica se já existe uma foto associada ao usuário
      const fotoExistente = await this.prisma.fotoUsuario.findFirst({
        where: { usuarioId: userId, id: idFoto }, 
      });
  
      if (fotoExistente) {
        // Se existe, atualiza a foto existente
        await this.prisma.fotoUsuario.update({
          where: { id: fotoExistente.id }, // Aqui utiliza a chave única `id`
          data: {
            url_foto: imageUrl,
            cloudinary_id: idCloudinary,
          },
        });
      } else {
        // Se não existe, cria uma nova entrada
        await this.prisma.fotoUsuario.create({
          data: {
            usuarioId: userId,
            url_foto: imageUrl,
            cloudinary_id: idCloudinary,
          },
        });
      }
  
      return idCloudinary;
    } catch (error) {
      throw new HttpException(`Erro ao atualizar a foto do usuário: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

  async create(file: Express.Multer.File, userId: number) {
    try {
      // Verifica o número de fotos existentes do usuário
      const fotosExistentes = await this.prisma.fotoUsuario.count({
        where: { usuarioId: userId },
      });

      if (fotosExistentes >= 3) {
        throw new BadRequestException('O usuário já possui 3 fotos de perfil.');
      }
      const uploadResult = await this.upload(file);
      const imageUrl = uploadResult.secure_url;
      const idCloudinary = uploadResult.public_id;
  
      // Cria uma nova entrada de foto no banco de dados
      await this.prisma.fotoUsuario.create({
        data: {
          url_foto: imageUrl,
          cloudinary_id: idCloudinary,
          usuarioId: userId,
        },
      });

      return { message: 'Imagem salva com sucesso' };

    } catch (error) {
      const errorMessage = error.message || 'Erro desconhecido ao fazer upload e salvar a imagem';
      throw new HttpException(`Erro ao fazer upload e salvar a imagem: ${errorMessage}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  } 

  async getImage(idUsuario: number) {
    try {
      const image = await this.prisma.fotoUsuario.findFirst({
        where: { usuarioId: idUsuario },
        orderBy: { id: 'desc' }, // Pega a última foto do usuário
      });
      if (!image) {
        throw new HttpException('Foto não encontrada', HttpStatus.NOT_FOUND);
      }

      return image;
    } catch (error) {
      throw new HttpException(`Erro ao buscar a imagem: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  

  getFotoPerfil(idUsuario: number) {
    return this.prisma.fotoUsuario.findFirst({
      where: { usuarioId: idUsuario },
    });
  }

  getFotoPerfilEspecifica(idUsuario: number, idFoto: number) {
    return this.prisma.fotoUsuario.findFirst({
      where: { usuarioId: idUsuario, id: idFoto },
    });
  }

  async remove(idUsuario: number, idFoto: number) {
    try {
      // Tenta encontrar a foto do usuário
      const foto = await this.prisma.fotoUsuario.findUnique({
        where: { id: idFoto }, // Certifique-se de usar o campo id corretamente
      });

      if (!foto) {
        throw new HttpException('Foto não encontrada', HttpStatus.NOT_FOUND);
      }

      // Deleta a imagem no Cloudinary
      await v2.uploader.destroy(foto.cloudinary_id);

      // Remove a foto do banco de dados
      await this.prisma.fotoUsuario.delete({
        where: { id: idFoto },
      });

      console.log('Imagem deletada com sucesso');
      return { message: 'Imagem deletada com sucesso' };
    } catch (error) {
      throw new HttpException(`Erro ao deletar a imagem: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

  async update(file: Express.Multer.File, userId: number, idFoto: number) {
    try {
      // Primeiro, busca o usuário para obter o `cloudinary_id` da imagem antiga
      const idCloudinaryAntigo = FotoUsuario.cloudinary_id;

      // Se houver uma imagem antiga no Cloudinary, deleta essa imagem
      if (idCloudinaryAntigo) {
        await v2.uploader.destroy(idCloudinaryAntigo);
      }

      // Faz o upload da nova imagem para o Cloudinary
      const uploadResult = await this.upload(file);
      const imageUrl = uploadResult.secure_url;
      const idCloudinary = uploadResult.public_id;

      // Atualiza o perfil do usuário com a nova URL e idCloudinary
      return await this.atualizarFoto(userId, imageUrl, idCloudinary, idFoto);
    } catch (error) {
      throw new HttpException(`Erro ao atualizar a foto: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

/* eslint-disable prettier/prettier */
import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import toStream = require('buffer-to-stream'); //npm install buffer-to-stream @types/buffer-to-stream
import { FotosHotei } from './entities/fotos_hotei.entity';

@Injectable()
export class fotosHotelsService {
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

  async atualizarFoto(hotelId: number, imageUrl: string, idCloudinary: string, idFoto: number) {
    try {
      // Verifica se já existe uma foto associada ao usuário
      const fotoExistente = await this.prisma.fotosHotel.findFirst({
        where: { hotelId: hotelId, id: idFoto }, 
      });
  
      if (fotoExistente) {
        // Se existe, atualiza a foto existente
        await this.prisma.fotosHotel.update({
          where: { id: fotoExistente.id }, // Aqui utiliza a chave única `id`
          data: {
            url_foto: imageUrl,
            cloudinary_id: idCloudinary,
          },
        });
      } else {
        // Se não existe, cria uma nova entrada
        await this.prisma.fotosHotel.create({
          data: {
            hotelId: hotelId,
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
      // Obtém o hotelId a partir do usuário autenticado
      const hotel = await this.prisma.hotel.findFirst({
        where: { id: userId },
      });

      if (!hotel) {
        throw new BadRequestException('Usuário não está associado a nenhum hotel.');
      }

      const hotelId = hotel.id;

      const fotosExistentes = await this.prisma.fotosHotel.findMany({
        where: { hotelId: hotelId },
      });

      if (fotosExistentes.length >= 5) {
        throw new BadRequestException('O hotel já possui 5 fotos.');
      }
      const uploadResult = await this.upload(file);
      const imageUrl = uploadResult.secure_url;
      const idCloudinary = uploadResult.public_id;
  
      // Cria uma nova entrada de foto no banco de dados
      await this.prisma.fotosHotel.create({
        data: {
          url_foto: imageUrl,
          cloudinary_id: idCloudinary,
          hotelId: hotelId,
        },
      });

      return { message: 'Imagem salva com sucesso' };

    } catch (error) {
      const errorMessage = error.message || 'Erro desconhecido ao fazer upload e salvar a imagem';
      throw new HttpException(`Erro ao fazer upload e salvar a imagem: ${errorMessage}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  } 

  async getImage(hotelId: number) {
    try {
      const image = await this.prisma.fotosHotel.findFirst({
        where: { hotelId: hotelId },
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

  getFotoHotel(hotelId: number) {
    return this.prisma.fotosHotel.findFirst({
      where: { hotelId: hotelId },
    });
  }

  getFotoHotelespecifica(hotelId: number, idFoto: number) {
    return this.prisma.fotosHotel.findFirst({
      where: { hotelId: hotelId, id: idFoto },
    });
  }

  async remove(userId: number, idFoto: number) {
    try {
      // Tenta encontrar a foto do usuário
      const usuario = await this.prisma.usuario.findUnique({
        where: { id: userId }
      });

      if (!usuario) {
        throw new BadRequestException('Usuário não encontrado.');
      }

      // Tenta encontrar a foto do usuário
      const foto = await this.prisma.fotosHotel.findFirst({
        where: { id: idFoto, hotelId: userId },
      });

      if (!foto) {
        throw new HttpException('Foto não encontrada', HttpStatus.NOT_FOUND);
      }

      // Deleta a imagem no Cloudinary
      await v2.uploader.destroy(foto.cloudinary_id);

      // Remove a foto do banco de dados
      await this.prisma.fotosHotel.delete({
        where: { id: idFoto },
      });

      console.log('Imagem deletada com sucesso');
      return { message: 'Imagem deletada com sucesso' };
    } catch (error) {
      throw new HttpException(`Erro ao deletar a imagem: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

  async update(file: Express.Multer.File, hotelId: number, idFoto: number) {
    try {
      // Primeiro, busca o usuário para obter o `cloudinary_id` da imagem antiga
      const idCloudinaryAntigo = FotosHotei.cloudinary_id;

      // Se houver uma imagem antiga no Cloudinary, deleta essa imagem
      if (idCloudinaryAntigo) {
        await v2.uploader.destroy(idCloudinaryAntigo);
      }

      // Faz o upload da nova imagem para o Cloudinary
      const uploadResult = await this.upload(file);
      const imageUrl = uploadResult.secure_url;
      const idCloudinary = uploadResult.public_id;

      // Atualiza o perfil do usuário com a nova URL e idCloudinary
      return await this.atualizarFoto(hotelId, imageUrl, idCloudinary, idFoto);
    } catch (error) {
      throw new HttpException(`Erro ao atualizar a foto: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

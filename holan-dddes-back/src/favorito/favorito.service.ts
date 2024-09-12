import { Injectable } from '@nestjs/common';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class FavoritoService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFavoritoDto: CreateFavoritoDto) {
    const CriarFavorito = this.prisma.favorito.create({
      data: createFavoritoDto,
    });
    return CriarFavorito;
  }

  findAll(findAllFavoritoDto: any) {
    const AcharTodosFavoritos = this.prisma.favorito.findMany({
      where: findAllFavoritoDto,
    });
    return AcharTodosFavoritos;
  }

  findOne(findOneFavoritoDto: any) {
    const AcharUmFavorito = this.prisma.favorito.findUnique({
      where: findOneFavoritoDto,
    });
    return AcharUmFavorito;
  }

  update(p0: number, updateFavoritoDto: UpdateFavoritoDto) {
    const AtualizarFavorito = this.prisma.favorito.update({
      where: { id: updateFavoritoDto.id },
      data: updateFavoritoDto,
    });
    return AtualizarFavorito;
  }

  remove(deleteFavoritoDto: any) {
    const DeletarFavorito = this.prisma.favorito.delete({
      where: deleteFavoritoDto,
    });
    return DeletarFavorito;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateFotoUsuarioDto } from './dto/create-foto_usuario.dto';
import { UpdateFotoUsuarioDto } from './dto/update-foto_usuario.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class FotoUsuarioService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFotoUsuarioDto: CreateFotoUsuarioDto) {
    const CriarFotoUsuario = this.prisma.fotoUsuario.create({
      data: createFotoUsuarioDto,
    });
    return CriarFotoUsuario;
  }

  findAll(findAllFotoUsuarioDto: any) {
    const AcharTodasFotoUsuarios = this.prisma.fotoUsuario.findMany({
      where: findAllFotoUsuarioDto,
    });
    return AcharTodasFotoUsuarios;
  }

  findOne(findOneFotoUsuarioDto: any) {
    const AcharUmaFotoUsuario = this.prisma.fotoUsuario.findUnique({
      where: findOneFotoUsuarioDto,
    });
    return AcharUmaFotoUsuario;
  }

  update(id: number, UpdateFotoUsuarioDto: UpdateFotoUsuarioDto) {
    const fotoUsuario = this.prisma.fotoUsuario.update({
      where: {id},
      data: UpdateFotoUsuarioDto,
    })
    return fotoUsuario
  }

  remove(deleteFotoUsuarioDto: any) {
    const DeletarFotoUsuario = this.prisma.fotoUsuario.delete({
      where: deleteFotoUsuarioDto,
    });
    return DeletarFotoUsuario;
  }
}

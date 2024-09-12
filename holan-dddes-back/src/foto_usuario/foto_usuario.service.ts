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

  update(p0: number, updateFotoUsuarioDto: UpdateFotoUsuarioDto) {
    const AtualizarFotoUsuario = this.prisma.fotoUsuario.update({
      where: { id: updateFotoUsuarioDto.id },
      data: updateFotoUsuarioDto,
    });
    return AtualizarFotoUsuario;
  }

  remove(deleteFotoUsuarioDto: any) {
    const DeletarFotoUsuario = this.prisma.fotoUsuario.delete({
      where: deleteFotoUsuarioDto,
    });
    return DeletarFotoUsuario;
  }
}

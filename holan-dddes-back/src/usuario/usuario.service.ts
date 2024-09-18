import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const CriarUsuario = this.prisma.usuario.create({
      data: createUsuarioDto,
    });
    return CriarUsuario;
  }

  findAll(findAllUsuarioDto: any) {
    const AcharTodosUsuarios = this.prisma.usuario.findMany({
      where: findAllUsuarioDto,
    });
    return AcharTodosUsuarios;
  }

  async findOne(id: number) {
    return await this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });
    return usuario;
  }

  async remove(id: number) {
    return await this.prisma.usuario.delete({
      where: { id },
    });
  }
}

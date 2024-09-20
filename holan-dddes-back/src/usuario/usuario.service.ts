/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const CriarUsuario = this.prisma.usuario.create({
      data: {...createUsuarioDto, //encriptação da senha
        hash_senha: await bcrypt.hash(createUsuarioDto.hash_senha, 10) //unidade de medida do quanto vai estar sendo encriptado
      }
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

  // Autenticação (recebe email como parâmetro)
  async findByEmail(email: string) {
    return await this.prisma.usuario.findUnique({
      where: { email: email }, // retorna o usuário que tem o email
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

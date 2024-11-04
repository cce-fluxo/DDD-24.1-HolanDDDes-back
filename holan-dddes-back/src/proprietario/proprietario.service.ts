import { Injectable } from '@nestjs/common';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ProprietarioService {
  constructor(private readonly prisma: PrismaService) {}
  create(createProprietarioDto: CreateProprietarioDto) {
    const CriarProprietario = this.prisma.proprietario.create({
      data: createProprietarioDto,
    });
    return CriarProprietario;
  }

  findAll(findAllProprietarioDto: any) {
    const AcharTodasProprietarios = this.prisma.proprietario.findMany({
      where: findAllProprietarioDto,
    });
    return AcharTodasProprietarios;
  }

  async findOne(id: number) {
    return await this.prisma.proprietario.findUnique({
      where: { id },
    });
  }

  update(id: number, UpdateProprietarioDto: UpdateProprietarioDto) {
    const proprietario = this.prisma.proprietario.update({
      where: { id },
      data: UpdateProprietarioDto,
    });
    return proprietario;
  }

  async remove(id: number) {
    return await this.prisma.proprietario.delete({
      where: { id },
    });
  }

  async findMe(userId: number) {
    return await this.prisma.proprietario.findUnique({
      where: { usuarioId: userId },
    });
  }
}

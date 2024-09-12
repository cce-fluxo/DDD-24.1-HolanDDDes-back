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

  findOne(findOneProprietarioDto: any) {
    const AcharUmProprietario = this.prisma.proprietario.findUnique({
      where: findOneProprietarioDto,
    });
    return AcharUmProprietario;
  }

  update(p0: number, updateProprietarioDto: UpdateProprietarioDto) {
    const AtualizarProprietario = this.prisma.proprietario.update({
      where: { id: updateProprietarioDto.id },
      data: updateProprietarioDto,
    });
    return AtualizarProprietario;
  }

  remove(deleteProprietarioDto: any) {
    const DeletarProprietario = this.prisma.proprietario.delete({
      where: deleteProprietarioDto,
    });
    return DeletarProprietario;
  }
}

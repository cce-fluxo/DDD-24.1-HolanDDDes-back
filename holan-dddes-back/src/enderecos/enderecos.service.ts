import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class EnderecosService {
  constructor(private readonly prisma: PrismaService) {}
  create(createEnderecoDto: CreateEnderecoDto) {
    const CriarEndereco = this.prisma.endereco.create({
      data: createEnderecoDto,
    });
    return CriarEndereco;
  }

  findAll(findAllEnderecoDto: any) {
    const AcharTodosEnderecos = this.prisma.endereco.findMany({
      where: findAllEnderecoDto,
    });
    return AcharTodosEnderecos;
  }

  findOne(findOneEnderecoDto: any) {
    const AcharUmEndereco = this.prisma.endereco.findUnique({
      where: findOneEnderecoDto,
    });
    return AcharUmEndereco;
  }

  update(p0: number, updateEnderecoDto: UpdateEnderecoDto) {
    const AtualizarEndereco = this.prisma.endereco.update({
      where: { id: updateEnderecoDto.id },
      data: updateEnderecoDto,
    });
    return AtualizarEndereco;
  }

  remove(deleteEnderecoDto: any) {
    const DeletarEndereco = this.prisma.endereco.delete({
      where: deleteEnderecoDto,
    });
    return DeletarEndereco;
  }
}

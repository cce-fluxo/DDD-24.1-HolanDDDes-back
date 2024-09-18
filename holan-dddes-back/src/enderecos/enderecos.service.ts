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

  async findOne(id: number) {
    return await this.prisma.endereco.findUnique({where: {id}});
  }

  update(id: number, UpdateEnderecoDto: UpdateEnderecoDto) {
    const endereco = this.prisma.endereco.update({
      where: {id},
      data: UpdateEnderecoDto,
    })
    return endereco
  }

  remove(deleteEnderecoDto: any) {
    const DeletarEndereco = this.prisma.endereco.delete({
      where: deleteEnderecoDto,
    });
    return DeletarEndereco;
  }
}

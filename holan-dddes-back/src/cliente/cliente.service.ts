import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}
  create(createClienteDto: CreateClienteDto) {
    const criarCliente = this.prisma.client.create({
      data: createClienteDto,
    });
    return criarCliente;
  }

  findAll(findAllClienteDto: any) {
    const acharTodosClientes = this.prisma.client.findMany({
      where: findAllClienteDto,
    });
    return acharTodosClientes;
  }

  async findOne(id: number) {
    return await this.prisma.client.findUnique({
      where: { id },
    });
  }

  update(id: number, UpdateClienteDto: UpdateClienteDto) {
    const cliente = this.prisma.client.update({
      where: { id },
      data: UpdateClienteDto,
    });
    return cliente;
  }

  async remove(id: number) {
    return await this.prisma.client.delete({
      where: { id },
    });
  }
}

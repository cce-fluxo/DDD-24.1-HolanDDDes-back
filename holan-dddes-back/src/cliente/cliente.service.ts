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

  findOne(findOneClienteDto: any) {
    const acharUmCliente = this.prisma.client.findUnique({
      where: findOneClienteDto,
    });
    return acharUmCliente;
  }

  update(id: number, UpdateClienteDto: UpdateClienteDto) {
    const cliente = this.prisma.client.update({
      where: {id},
      data: UpdateClienteDto,
    })
    return cliente;
  }

  remove(deleteClienteDto: any) {
    const deletarCliente = this.prisma.client.delete({
      where: deleteClienteDto,
    });
    return deletarCliente;
  }
}

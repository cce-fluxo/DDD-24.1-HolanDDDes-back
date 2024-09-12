import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}
  create(createClienteDto: CreateClienteDto) {
    const criarCliente = this.prisma.cliente.create({
      data: createClienteDto,
    });
    return criarCliente;
  }

  findAll(findAllClienteDto: any) {
    const acharTodosClientes = this.prisma.cliente.findMany({
      where: findAllClienteDto,
    });
    return acharTodosClientes;
  }

  findOne(findOneClienteDto: any) {
    const acharUmCliente = this.prisma.cliente.findUnique({
      where: findOneClienteDto,
    });
    return acharUmCliente;
  }

  update(p0: number, updateClienteDto: UpdateClienteDto) {
    const atualizarCliente = this.prisma.cliente.update({
      where: { id: updateClienteDto.id },
      data: updateClienteDto,
    });
    return atualizarCliente;
  }

  remove(deleteClienteDto: any) {
    const deletarCliente = this.prisma.cliente.delete({
      where: deleteClienteDto,
    });
    return deletarCliente;
  }
}

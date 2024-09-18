import { Injectable } from '@nestjs/common';
import { CreateAssociacaoCupomClienteDto } from './dto/create-associacao_cupom_cliente.dto';
import { UpdateAssociacaoCupomClienteDto } from './dto/update-associacao_cupom_cliente.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AssociacaoCupomClienteService {
  constructor(private prisma: PrismaService) {}
  create(ceateAssociacaoCupomClienteDto: CreateAssociacaoCupomClienteDto) {
    return this.prisma.clienteNoCupom.create({
        data: ceateAssociacaoCupomClienteDto,
      });
  }

  findAll(findAllAssociacaoDto: any) {
    return this.prisma.clienteNoCupom.findMany({
        where: findAllAssociacaoDto,
      });
  }

  findOne(id: number) {
    return this.prisma.clienteNoCupom.findUnique({
      where: {id},
    });
  }

  update(id: number, updateAssociacaoCupomClienteDto: UpdateAssociacaoCupomClienteDto) {
    return this.prisma.clienteNoCupom.update({
      where: {id},
      data: updateAssociacaoCupomClienteDto,
    });
  }

  remove(id: number) {
    return this.prisma.clienteNoCupom.delete({
      where: {id},
    });
  }
}

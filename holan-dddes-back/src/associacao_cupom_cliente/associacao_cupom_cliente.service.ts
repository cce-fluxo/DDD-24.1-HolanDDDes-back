import { Injectable } from '@nestjs/common';
import { CreateAssociacaoCupomClienteDto } from './dto/create-associacao_cupom_cliente.dto';
import { UpdateAssociacaoCupomClienteDto } from './dto/update-associacao_cupom_cliente.dto';

@Injectable()
export class AssociacaoCupomClienteService {
  create(createAssociacaoCupomClienteDto: CreateAssociacaoCupomClienteDto) {
    return 'This action adds a new associacaoCupomCliente';
  }

  findAll() {
    return `This action returns all associacaoCupomCliente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} associacaoCupomCliente`;
  }

  update(id: number, updateAssociacaoCupomClienteDto: UpdateAssociacaoCupomClienteDto) {
    return `This action updates a #${id} associacaoCupomCliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} associacaoCupomCliente`;
  }
}

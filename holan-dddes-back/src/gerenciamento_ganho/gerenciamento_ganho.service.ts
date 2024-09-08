import { Injectable } from '@nestjs/common';
import { CreateGerenciamentoGanhoDto } from './dto/create-gerenciamento_ganho.dto';
import { UpdateGerenciamentoGanhoDto } from './dto/update-gerenciamento_ganho.dto';

@Injectable()
export class GerenciamentoGanhoService {
  create(createGerenciamentoGanhoDto: CreateGerenciamentoGanhoDto) {
    return 'This action adds a new gerenciamentoGanho';
  }

  findAll() {
    return `This action returns all gerenciamentoGanho`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gerenciamentoGanho`;
  }

  update(id: number, updateGerenciamentoGanhoDto: UpdateGerenciamentoGanhoDto) {
    return `This action updates a #${id} gerenciamentoGanho`;
  }

  remove(id: number) {
    return `This action removes a #${id} gerenciamentoGanho`;
  }
}

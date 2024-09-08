import { Injectable } from '@nestjs/common';
import { CreateGerenciamentoGanhoAcomodacaoDto } from './dto/create-gerenciamento_ganho_acomodacao.dto';
import { UpdateGerenciamentoGanhoAcomodacaoDto } from './dto/update-gerenciamento_ganho_acomodacao.dto';

@Injectable()
export class GerenciamentoGanhoAcomodacaoService {
  create(createGerenciamentoGanhoAcomodacaoDto: CreateGerenciamentoGanhoAcomodacaoDto) {
    return 'This action adds a new gerenciamentoGanhoAcomodacao';
  }

  findAll() {
    return `This action returns all gerenciamentoGanhoAcomodacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gerenciamentoGanhoAcomodacao`;
  }

  update(id: number, updateGerenciamentoGanhoAcomodacaoDto: UpdateGerenciamentoGanhoAcomodacaoDto) {
    return `This action updates a #${id} gerenciamentoGanhoAcomodacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} gerenciamentoGanhoAcomodacao`;
  }
}

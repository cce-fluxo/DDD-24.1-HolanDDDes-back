import { Injectable } from '@nestjs/common';
import { CreateAvaliacaoAcomodacoeDto } from './dto/create-avaliacao_acomodacoe.dto';
import { UpdateAvaliacaoAcomodacoeDto } from './dto/update-avaliacao_acomodacoe.dto';

@Injectable()
export class AvaliacaoAcomodacoesService {
  create(createAvaliacaoAcomodacoeDto: CreateAvaliacaoAcomodacoeDto) {
    return 'This action adds a new avaliacaoAcomodacoe';
  }

  findAll() {
    return `This action returns all avaliacaoAcomodacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avaliacaoAcomodacoe`;
  }

  update(id: number, updateAvaliacaoAcomodacoeDto: UpdateAvaliacaoAcomodacoeDto) {
    return `This action updates a #${id} avaliacaoAcomodacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} avaliacaoAcomodacoe`;
  }
}

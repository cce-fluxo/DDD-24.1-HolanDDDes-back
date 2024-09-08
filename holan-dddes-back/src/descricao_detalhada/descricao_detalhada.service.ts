import { Injectable } from '@nestjs/common';
import { CreateDescricaoDetalhadaDto } from './dto/create-descricao_detalhada.dto';
import { UpdateDescricaoDetalhadaDto } from './dto/update-descricao_detalhada.dto';

@Injectable()
export class DescricaoDetalhadaService {
  create(createDescricaoDetalhadaDto: CreateDescricaoDetalhadaDto) {
    return 'This action adds a new descricaoDetalhada';
  }

  findAll() {
    return `This action returns all descricaoDetalhada`;
  }

  findOne(id: number) {
    return `This action returns a #${id} descricaoDetalhada`;
  }

  update(id: number, updateDescricaoDetalhadaDto: UpdateDescricaoDetalhadaDto) {
    return `This action updates a #${id} descricaoDetalhada`;
  }

  remove(id: number) {
    return `This action removes a #${id} descricaoDetalhada`;
  }
}

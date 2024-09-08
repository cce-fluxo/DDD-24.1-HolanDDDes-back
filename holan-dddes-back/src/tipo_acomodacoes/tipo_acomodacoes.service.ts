import { Injectable } from '@nestjs/common';
import { CreateTipoAcomodacoeDto } from './dto/create-tipo_acomodacoe.dto';
import { UpdateTipoAcomodacoeDto } from './dto/update-tipo_acomodacoe.dto';

@Injectable()
export class TipoAcomodacoesService {
  create(createTipoAcomodacoeDto: CreateTipoAcomodacoeDto) {
    return 'This action adds a new tipoAcomodacoe';
  }

  findAll() {
    return `This action returns all tipoAcomodacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoAcomodacoe`;
  }

  update(id: number, updateTipoAcomodacoeDto: UpdateTipoAcomodacoeDto) {
    return `This action updates a #${id} tipoAcomodacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoAcomodacoe`;
  }
}

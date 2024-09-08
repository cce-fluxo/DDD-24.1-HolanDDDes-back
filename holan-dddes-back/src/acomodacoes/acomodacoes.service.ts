import { Injectable } from '@nestjs/common';
import { CreateAcomodacoeDto } from './dto/create-acomodacoe.dto';
import { UpdateAcomodacoeDto } from './dto/update-acomodacoe.dto';

@Injectable()
export class AcomodacoesService {
  create(createAcomodacoeDto: CreateAcomodacoeDto) {
    return 'This action adds a new acomodacoe';
  }

  findAll() {
    return `This action returns all acomodacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acomodacoe`;
  }

  update(id: number, updateAcomodacoeDto: UpdateAcomodacoeDto) {
    return `This action updates a #${id} acomodacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} acomodacoe`;
  }
}

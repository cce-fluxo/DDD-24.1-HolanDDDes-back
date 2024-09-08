import { Injectable } from '@nestjs/common';
import { CreateComodidadeAcomodacoeDto } from './dto/create-comodidade_acomodacoe.dto';
import { UpdateComodidadeAcomodacoeDto } from './dto/update-comodidade_acomodacoe.dto';

@Injectable()
export class ComodidadeAcomodacoesService {
  create(createComodidadeAcomodacoeDto: CreateComodidadeAcomodacoeDto) {
    return 'This action adds a new comodidadeAcomodacoe';
  }

  findAll() {
    return `This action returns all comodidadeAcomodacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comodidadeAcomodacoe`;
  }

  update(id: number, updateComodidadeAcomodacoeDto: UpdateComodidadeAcomodacoeDto) {
    return `This action updates a #${id} comodidadeAcomodacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} comodidadeAcomodacoe`;
  }
}

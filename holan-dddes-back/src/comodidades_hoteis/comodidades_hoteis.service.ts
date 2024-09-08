import { Injectable } from '@nestjs/common';
import { CreateComodidadesHoteiDto } from './dto/create-comodidades_hotei.dto';
import { UpdateComodidadesHoteiDto } from './dto/update-comodidades_hotei.dto';

@Injectable()
export class ComodidadesHoteisService {
  create(createComodidadesHoteiDto: CreateComodidadesHoteiDto) {
    return 'This action adds a new comodidadesHotei';
  }

  findAll() {
    return `This action returns all comodidadesHoteis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comodidadesHotei`;
  }

  update(id: number, updateComodidadesHoteiDto: UpdateComodidadesHoteiDto) {
    return `This action updates a #${id} comodidadesHotei`;
  }

  remove(id: number) {
    return `This action removes a #${id} comodidadesHotei`;
  }
}

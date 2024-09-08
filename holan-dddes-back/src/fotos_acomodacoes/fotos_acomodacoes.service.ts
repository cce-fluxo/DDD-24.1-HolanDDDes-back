import { Injectable } from '@nestjs/common';
import { CreateFotosAcomodacoeDto } from './dto/create-fotos_acomodacoe.dto';
import { UpdateFotosAcomodacoeDto } from './dto/update-fotos_acomodacoe.dto';

@Injectable()
export class FotosAcomodacoesService {
  create(createFotosAcomodacoeDto: CreateFotosAcomodacoeDto) {
    return 'This action adds a new fotosAcomodacoe';
  }

  findAll() {
    return `This action returns all fotosAcomodacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fotosAcomodacoe`;
  }

  update(id: number, updateFotosAcomodacoeDto: UpdateFotosAcomodacoeDto) {
    return `This action updates a #${id} fotosAcomodacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} fotosAcomodacoe`;
  }
}

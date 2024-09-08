import { Injectable } from '@nestjs/common';
import { CreateFotosHoteiDto } from './dto/create-fotos_hotei.dto';
import { UpdateFotosHoteiDto } from './dto/update-fotos_hotei.dto';

@Injectable()
export class FotosHoteisService {
  create(createFotosHoteiDto: CreateFotosHoteiDto) {
    return 'This action adds a new fotosHotei';
  }

  findAll() {
    return `This action returns all fotosHoteis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fotosHotei`;
  }

  update(id: number, updateFotosHoteiDto: UpdateFotosHoteiDto) {
    return `This action updates a #${id} fotosHotei`;
  }

  remove(id: number) {
    return `This action removes a #${id} fotosHotei`;
  }
}

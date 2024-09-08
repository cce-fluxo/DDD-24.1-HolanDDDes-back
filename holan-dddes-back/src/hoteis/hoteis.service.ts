import { Injectable } from '@nestjs/common';
import { CreateHoteiDto } from './dto/create-hotei.dto';
import { UpdateHoteiDto } from './dto/update-hotei.dto';

@Injectable()
export class HoteisService {
  create(createHoteiDto: CreateHoteiDto) {
    return 'This action adds a new hotei';
  }

  findAll() {
    return `This action returns all hoteis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hotei`;
  }

  update(id: number, updateHoteiDto: UpdateHoteiDto) {
    return `This action updates a #${id} hotei`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotei`;
  }
}

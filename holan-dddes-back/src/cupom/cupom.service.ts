import { Injectable } from '@nestjs/common';
import { CreateCupomDto } from './dto/create-cupom.dto';
import { UpdateCupomDto } from './dto/update-cupom.dto';

@Injectable()
export class CupomService {
  create(createCupomDto: CreateCupomDto) {
    return 'This action adds a new cupom';
  }

  findAll() {
    return `This action returns all cupom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cupom`;
  }

  update(id: number, updateCupomDto: UpdateCupomDto) {
    return `This action updates a #${id} cupom`;
  }

  remove(id: number) {
    return `This action removes a #${id} cupom`;
  }
}

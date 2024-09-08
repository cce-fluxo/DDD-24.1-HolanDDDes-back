import { Injectable } from '@nestjs/common';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';

@Injectable()
export class ProprietarioService {
  create(createProprietarioDto: CreateProprietarioDto) {
    return 'This action adds a new proprietario';
  }

  findAll() {
    return `This action returns all proprietario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proprietario`;
  }

  update(id: number, updateProprietarioDto: UpdateProprietarioDto) {
    return `This action updates a #${id} proprietario`;
  }

  remove(id: number) {
    return `This action removes a #${id} proprietario`;
  }
}

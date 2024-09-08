import { Injectable } from '@nestjs/common';
import { CreateCobrancaDto } from './dto/create-cobranca.dto';
import { UpdateCobrancaDto } from './dto/update-cobranca.dto';

@Injectable()
export class CobrancaService {
  create(createCobrancaDto: CreateCobrancaDto) {
    return 'This action adds a new cobranca';
  }

  findAll() {
    return `This action returns all cobranca`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cobranca`;
  }

  update(id: number, updateCobrancaDto: UpdateCobrancaDto) {
    return `This action updates a #${id} cobranca`;
  }

  remove(id: number) {
    return `This action removes a #${id} cobranca`;
  }
}

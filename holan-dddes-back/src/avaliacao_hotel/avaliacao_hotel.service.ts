import { Injectable } from '@nestjs/common';
import { CreateAvaliacaoHotelDto } from './dto/create-avaliacao_hotel.dto';
import { UpdateAvaliacaoHotelDto } from './dto/update-avaliacao_hotel.dto';

@Injectable()
export class AvaliacaoHotelService {
  create(createAvaliacaoHotelDto: CreateAvaliacaoHotelDto) {
    return 'This action adds a new avaliacaoHotel';
  }

  findAll() {
    return `This action returns all avaliacaoHotel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avaliacaoHotel`;
  }

  update(id: number, updateAvaliacaoHotelDto: UpdateAvaliacaoHotelDto) {
    return `This action updates a #${id} avaliacaoHotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} avaliacaoHotel`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateAssociacaoCupomHotelDto } from './dto/create-associacao_cupom_hotel.dto';
import { UpdateAssociacaoCupomHotelDto } from './dto/update-associacao_cupom_hotel.dto';

@Injectable()
export class AssociacaoCupomHotelService {
  create(createAssociacaoCupomHotelDto: CreateAssociacaoCupomHotelDto) {
    return 'This action adds a new associacaoCupomHotel';
  }

  findAll() {
    return `This action returns all associacaoCupomHotel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} associacaoCupomHotel`;
  }

  update(id: number, updateAssociacaoCupomHotelDto: UpdateAssociacaoCupomHotelDto) {
    return `This action updates a #${id} associacaoCupomHotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} associacaoCupomHotel`;
  }
}

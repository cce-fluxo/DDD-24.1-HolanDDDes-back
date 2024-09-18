import { Injectable } from '@nestjs/common';
import { CreateAssociacaoCupomHotelDto } from './dto/create-associacao_cupom_hotel.dto';
import { UpdateAssociacaoCupomHotelDto } from './dto/update-associacao_cupom_hotel.dto';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class AssociacaoCupomHotelService {
  constructor(private prisma: PrismaService) {}
  create(ceateAssociacaoCupomHotelDto: CreateAssociacaoCupomHotelDto) {
    return this.prisma.cupomNoHotel.create({
        data: ceateAssociacaoCupomHotelDto,
      });
  }

  findAll(findAllAssociacaoDto: any) {
    return this.prisma.cupomNoHotel.findMany({
        where: findAllAssociacaoDto,
      });
  }

  findOne(id: number) {
    return this.prisma.cupomNoHotel.findUnique({
      where: {id},
    });
  }

  update(id: number, updateAssociacaoCupomHotelDto: UpdateAssociacaoCupomHotelDto) {
    return this.prisma.cupomNoHotel.update({
      where: {id},
      data: updateAssociacaoCupomHotelDto,
    });
  }

  remove(id: number) {
    return this.prisma.cupomNoHotel.delete({
      where: {id},
    });
  }
}


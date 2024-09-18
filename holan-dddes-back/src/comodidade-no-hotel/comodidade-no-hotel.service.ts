/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateComodidadeNoHotelDto } from './dto/create-comodidade_no_hotel.dto';
import { UpdateComodidadeNoHotelDto } from './dto/update-comodidade_no_hotel.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ComodidadeNoHotelService {
  constructor(private prisma: PrismaService) {}
  create(createComodidadeNoHotelDto: CreateComodidadeNoHotelDto) {
    const CriarComodidadeNoHotel = this.prisma.comodidadeNoHotel.create({
      data: createComodidadeNoHotelDto,
    });
    return CriarComodidadeNoHotel;
  }

  findAll(findAllComodidadeNoHotelDto: any) {
    const AcharTodasComodidadesNoHotel = this.prisma.comodidadeNoHotel.findMany(
      {
        where: findAllComodidadeNoHotelDto,
      });
    return AcharTodasComodidadesNoHotel;
  }

  async findOne(id: number) {
    return await this.prisma.comodidadeHotel.findUnique({where: {id}});
  }

  update(id: number, updateComodidadeNoHotelDto: UpdateComodidadeNoHotelDto) {
    const comodidadeNoHotel = this.prisma.comodidadeNoHotel.update({
      where: { id: id },
      data: updateComodidadeNoHotelDto,
    })
    return comodidadeNoHotel;
  }

  remove(deleteComodidadeNoHotelDto: any) {
    const DeletarComodidadeNoHotel = this.prisma.comodidadeNoHotel.delete(
      {
      where: deleteComodidadeNoHotelDto,
      },
    );
    return DeletarComodidadeNoHotel;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateComodidadesHotelDto } from './dto/create-comodidades_hotei.dto';
import { UpdateComodidadesHotelDto } from './dto/update-comodidades_hotei.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class comodidadesHotelsService {
  constructor(private prisma: PrismaService) {}
  create(CreateComodidadesHotelDto: CreateComodidadesHotelDto) {
    const criarcomodidadesHotel = this.prisma.comodidadeHotel.create({
      data: CreateComodidadesHotelDto,
    });
    return criarcomodidadesHotel;
  }

  findAll(findAllcomodidadesHotelDto: any) {
    const acharTodascomodidadesHotels = this.prisma.comodidadeHotel.findMany({
      where: findAllcomodidadesHotelDto,
    });
    return acharTodascomodidadesHotels;
  }

  findOne(findOnecomodidadesHotelDto: any) {
    const acharUmacomodidadesHotel = this.prisma.comodidadeHotel.findUnique({
      where: findOnecomodidadesHotelDto,
    });
    return acharUmacomodidadesHotel;
  }

  update(id: number, UpdateComodidadesHotelDto: UpdateComodidadesHotelDto) {
    const comodidadeHotel = this.prisma.comodidadeHotel.update({
      where: {id},
      data: UpdateComodidadesHotelDto,
    })
    return comodidadeHotel;
  }

  remove(deletecomodidadesHotelDto: any) {
    const deletarcomodidadesHotel = this.prisma.comodidadeHotel.delete({
      where: deletecomodidadesHotelDto,
    });
    return deletarcomodidadesHotel;
  }
}

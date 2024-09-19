/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreatehotelDto } from './dto/create-hotei.dto';
import { UpdatehotelDto } from './dto/update-hotei.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class hotelsService {
  constructor(private prisma: PrismaService) {}
  create(createhotelDto: CreatehotelDto) {
    const Criarhotel = this.prisma.hotel.create({
      data: createhotelDto,
    });
    return Criarhotel;
  }

  findAll(findAllhotelDto: any) {
    const AcharTodoshotels = this.prisma.hotel.findMany({
      where: findAllhotelDto,
    });
    return AcharTodoshotels;
  }

  async findOne(id: number) {
    return await this.prisma.hotel.findUnique({where: {id}});
  }

  update(id: number, UpdatehotelDto: UpdatehotelDto) {
    const hotel = this.prisma.hotel.update({
      where: {id},
      data: UpdatehotelDto,
    })
    return hotel
  }

  async remove(id: number) {
    return await this.prisma.hotel.delete({where: {id}});
  }

  
}

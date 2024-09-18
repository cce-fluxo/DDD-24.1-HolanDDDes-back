import { Injectable } from '@nestjs/common';
import { CreatefotosHotelDto } from './dto/create-fotos_hotei.dto';
import { UpdatefotosHotelDto } from './dto/update-fotos_hotei.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class fotosHotelsService {
  constructor(private prisma: PrismaService) {}
  create(createfotosHotelDto: CreatefotosHotelDto) {
    const criarfotosHotel = this.prisma.fotosHotel.create({
      data: createfotosHotelDto,
    });
    return criarfotosHotel;
  }

  findAll(findAllfotosHotelDto: any) {
    const acharTodasfotosHotels = this.prisma.fotosHotel.findMany({
      where: findAllfotosHotelDto,
    });
    return acharTodasfotosHotels;
  }

  async findOne(id: number) {
    return await this.prisma.fotosHotel.findUnique({where: {id}});
  }

  update(id: number, UpdatefotosHotelDto: UpdatefotosHotelDto) {
    const fotosHotel = this.prisma.fotosHotel.update({
      where: {id},
      data: UpdatefotosHotelDto,
    })
    return fotosHotel
  }

  async remove(id: number) {
    return await this.prisma.fotosHotel.delete({where: {id}});
  }
}

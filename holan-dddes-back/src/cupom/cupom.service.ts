import { Injectable } from '@nestjs/common';
import { CreateCupomDto } from './dto/create-cupom.dto';
import { UpdateCupomDto } from './dto/update-cupom.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class CupomService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCupomDto: CreateCupomDto) {
    const CriarCupom = this.prisma.cupom.create({
      data: createCupomDto,
    });
    return CriarCupom;
  }

  findAll(findAllCupomDto: any) {
    const AcharTodosCupons = this.prisma.cupom.findMany({
      where: findAllCupomDto,
    });
    return AcharTodosCupons;
  }

  async findOne(id: number) {
    return await this.prisma.cupom.findUnique({where: {id}});
  }

  update(id: number, UpdateCupomDto: UpdateCupomDto) {
    const cupom = this.prisma.cupom.update({
      where: {id},
      data: UpdateCupomDto,
    })
    return cupom;
  }

  async remove(id: number) {
    return await this.prisma.cupom.delete({where: {id}});
  }

  async getClientesByCupom(cupomId: number) {
    return await this.prisma.cupom.findUnique({
      where: {id: cupomId},
      select: {Cliente: true},
    });
  }

  // Método para atrelar uma cliente a um cupom
  async createClienteCupom(cupomId: number, clienteId: number) {
    return await this.prisma.cupom.update({
      where: { id: cupomId },
      data: {
        Cliente: {
          connect: { id: clienteId }, 
        },
      },
    });
  }

  // Método para resgatar uma cliente específico que pode usar um cupom
  async findCliente(cupomId: number, clienteId: number) {
    return await this.prisma.cupom.findUnique({
      where: { id: cupomId },
      select: {
        Cliente: {
          where: { id: clienteId },
        },
      },
    });
  }

  //Método para remover uma relação ciente cupom
  async removeCliente(cupomId: number, clienteId: number) {
    return await this.prisma.cupom.update({
      where: { id: cupomId },
      data: {
        Cliente: {
          disconnect: { id: clienteId },
        },
      },
    });
  }


  async getHoteisByCupom(cupomid:number) {
    return this.prisma.cupom.findUnique({
      where: {id: cupomid},
      select: {Hotel: true},
    })
  }

  // Método para atrelar uma hotel a um cupom
  async createHotelCupom(cupomId: number, hotelId: number) {
    return await this.prisma.cupom.update({
      where: { id: cupomId },
      data: {
        Hotel: {
          connect: { id: hotelId }, 
        },
      },
    });
  }

  // Método para resgatar uma hotel específico que possui um cupom
  async findHotel(cupomId: number, hotelId: number) {
    return await this.prisma.cupom.findUnique({
      where: { id: cupomId },
      select: {
        Hotel: {
          where: { id: hotelId },
        },
      },
    });
  }

  //Método para remover uma relação hotel cupom
  async removeHotel(cupomId: number, hotelId: number) {
    return await this.prisma.cupom.update({
      where: { id: cupomId },
      data: {
        Hotel: {
          disconnect: { id: hotelId },
        },
      },
    });
  }
}

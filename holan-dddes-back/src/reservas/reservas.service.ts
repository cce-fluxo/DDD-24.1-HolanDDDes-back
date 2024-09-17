import { Injectable } from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ReservasService {
  constructor(private prisma: PrismaService) {}
  create(createReservaDto: CreateReservaDto) {
    const CriarReserva = this.prisma.reserva.create({
      data: createReservaDto,
    });
    return CriarReserva;
  }

  findAll(findAllReservaDto: any) {
    const AcharTodasReservas = this.prisma.reserva.findMany({
      where: findAllReservaDto,
    });
    return AcharTodasReservas;
  }

  findOne(findOneReservaDto: any) {
    const AcharUmaReserva = this.prisma.reserva.findUnique({
      where: findOneReservaDto,
    });
    return AcharUmaReserva;
  }

  update(id: number, updateReservaDto: UpdateReservaDto) {
    const reservaDto = this.prisma.reserva.update({
      where: {id},
      data: updateReservaDto,
    })
    return reservaDto
  }

  remove(deleteReservaDto: any) {
    const DeletarReserva = this.prisma.reserva.delete({
      where: deleteReservaDto,
    });
    return DeletarReserva;
  }
}

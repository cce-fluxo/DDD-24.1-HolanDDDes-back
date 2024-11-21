import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  // findOne(findOneReservaDto: any) {
  //   const AcharUmaReserva = this.prisma.reserva.findUnique({
  //     where: findOneReservaDto,
  //   });
  //   return AcharUmaReserva;
  // }

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

  async getProprietarioId(userId: number) {
    try {
      const proprietario = await this.prisma.proprietario.findFirst({
        where: { usuarioId: userId },
      });
      if (!proprietario) {
        throw new BadRequestException('Usuário não encontrado.');
      }

      return proprietario.id;
    } catch (error) {
      throw new HttpException(`Erro ao buscar o proprietário: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async getHotelId(userId: number) {
    try {
      const proprietarioId = await this.getProprietarioId(userId);
      const hotel = await this.prisma.hotel.findFirst({
        where: { proprietarioId: proprietarioId },
    });
    if (!hotel) {
      throw new BadRequestException('Usuário não encontrado.');
    }

    return hotel.id;
    } catch (error) {
      throw new HttpException(`Erro ao buscar o proprietário: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  async getReservas(userId: number) {
    // pega o id do hotel do usuario
    const hotelId = await this.getHotelId(userId);

    // Encontrando todas as reservas feitas em todas as acomodações de um hotel
    const reservas = await this.prisma.hotel.findMany({
      where: {id: hotelId},
      select: {Acomodacao: 
        {select: {Reserva: true}
      }
    }})

    return {reservas}
  }
}

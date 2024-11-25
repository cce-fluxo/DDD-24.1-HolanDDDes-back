/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
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
      where: { id },
      data: updateReservaDto,
    });
    return reservaDto;
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
      throw new HttpException(
        `Erro ao buscar o proprietário: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
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
      throw new HttpException(
        `Erro ao buscar o proprietário: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getReservas(userId: number) {
    // pega o id do hotel do usuario
    const hotelId = await this.getHotelId(userId);

    // Encontrando todas as reservas feitas em todas as acomodações de um hotel
    const reservas = await this.prisma.hotel.findMany({
      where: { id: hotelId },
      select: { Acomodacao: { select: { Reserva: true } } },
    });

    return { reservas };
  }

  async getRelatorioReserva(userId: number) {
    // pega o id do hotel do usuario
    const hotelId = await this.getHotelId(userId);

    // Data de hoje e começo do mês
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Zera a hora
    const inicioDoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    const fimDoMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);

    // Quartos com check-in hoje
    const checkInHoje = await this.prisma.acomodacao.findMany({
      where: {
        hotelId,
        Reserva: {
          some: {
            data_check_in: hoje, // A reserva começa hoje
          },
        },
      },
      include: {
        Reserva: {
          include: {
            cliente: {
              include: {
                usuario: {
                  select: {
                    nome: true, // Nome do usuário associado
                    telefone: true, // telefone do usuário associado
                  },
                },
              },
            },
          },
        },
      },
    });

    // Quartos com check-out hoje
    const checkOutHoje = await this.prisma.acomodacao.findMany({
      where: {
        hotelId,
        Reserva: {
          some: {
            data_check_out: hoje, // A reserva termina hoje
          },
        },
      },
      include: {
        Reserva: {
          include: {
            cliente: {
              include: {
                usuario: {
                  select: {
                    nome: true, // Nome do usuário associado
                    telefone: true, // telefone do usuário associado
                  },
                },
              },
            },
          },
        },
      },
    });

    // Quartos reservados neste mês
    const quartosReservadosMes = await this.prisma.acomodacao.findMany({
      where: {
        hotelId,
        Reserva: {
          some: {
            OR: [
              {
                data_check_in: {
                  gte: inicioDoMes, // A reserva começa neste mês
                  lte: fimDoMes, // E termina dentro do mês
                },
              },
              {
                data_check_out: {
                  gte: inicioDoMes, // A reserva termina neste mês
                  lte: fimDoMes,
                },
              },
            ],
          },
        },
      },
      include: {
        Reserva: {
          include: {
            cliente: {
              include: {
                usuario: {
                  select: {
                    nome: true, // Nome do usuário associado
                  },
                },
              },
            },
          },
        },
      },
    });

    // Clientes no momento (hóspedes únicos)
    const clientesNoMomento = await this.prisma.client.findMany({
      where: {
        Reserva: {
          some: {
            acomodacao: {
              hotelId,
            },
            data_check_in: {
              lte: hoje, // A reserva começou
            },
            data_check_out: {
              gte: hoje, // A reserva ainda está ativa
            },
          },
        },
      },
      include: {
        Reserva: true,
        usuario: true, // Inclui as informações do usuário
      },
    });

    // Encontra todos os quartos livres a partir de hoje
    const quartosLivres = await this.prisma.acomodacao.findMany({
      where: {
        hotelId, // Apenas acomodações do hotel do usuário
        Reserva: {
          none: {
            // Nenhuma reserva deve começar hoje ou depois
            data_check_out: {
              gte: hoje, // A reserva ainda está ativa ou vai começar
            },
          },
        },
      },
    });

    return {
      checkInHoje,
      checkOutHoje,
      quartosReservadosMes,
      quartosLivres,
      clientesNoMomento,
    };
  }
}

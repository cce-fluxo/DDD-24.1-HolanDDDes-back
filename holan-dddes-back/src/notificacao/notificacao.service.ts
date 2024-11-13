/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateNotificacaoDto } from './dto/create-notificacao.dto';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class NotificacaoService {
  constructor(private prisma: PrismaService) {}
  async create(createNotificacaoDto: CreateNotificacaoDto) {
    return await this.prisma.notificacao.create({
      data: {
        mensagem: createNotificacaoDto.mensagem,
        titulo: createNotificacaoDto.titulo,
        leitura: createNotificacaoDto.leitura,
        data_criacao: createNotificacaoDto.data_criacao,
        usuario: {
          connect: { id: createNotificacaoDto.usuarioId },
        },
      },
    });
  }

  findAll(id: any) {
    const AcharTodasNotificacoes = this.prisma.notificacao.findMany({
      where: {
        usuarioId: id, // Filtra as notificações pelo campo `usuarioId`
      },
    });
    return AcharTodasNotificacoes;
  }

  async findOne(id: number) {
    return await this.prisma.notificacao.findUnique({where: {id}});
  }

  update(id: number, UpdateNotificacaoDto: UpdateNotificacaoDto) {
    const notificacao = this.prisma.notificacao.update({
      where: {id},
      data: UpdateNotificacaoDto,
    })
    return notificacao
  }

  async remove(id: number) {
    return await this.prisma.notificacao.delete({where: {id}});
  }
}

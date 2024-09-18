import { Injectable } from '@nestjs/common';
import { CreateNotificacaoDto } from './dto/create-notificacao.dto';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class NotificacaoService {
  constructor(private prisma: PrismaService) {}
  create(createNotificacaoDto: CreateNotificacaoDto) {
    const CriarNotificacao = this.prisma.notificacao.create({
      data: createNotificacaoDto,
    });
    return CriarNotificacao;
  }

  findAll(findAllNotificacaoDto: any) {
    const AcharTodasNotificacoes = this.prisma.notificacao.findMany({
      where: findAllNotificacaoDto,
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

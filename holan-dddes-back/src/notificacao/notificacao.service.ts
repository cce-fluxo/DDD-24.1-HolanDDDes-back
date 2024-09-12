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

  findOne(findOneNotificacaoDto: any) {
    const AcharUmaNotificacao = this.prisma.notificacao.findUnique({
      where: findOneNotificacaoDto,
    });
    return AcharUmaNotificacao;
  }

  update(p0: number, updateNotificacaoDto: UpdateNotificacaoDto) {
    const AtualizarNotificacao = this.prisma.notificacao.update({
      where: { id: updateNotificacaoDto.id },
      data: updateNotificacaoDto,
    });
    return AtualizarNotificacao;
  }

  remove(deleteNotificacaoDto: any) {
    const DeletarNotificacao = this.prisma.notificacao.delete({
      where: deleteNotificacaoDto,
    });
    return DeletarNotificacao;
  }
}

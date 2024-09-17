import { Injectable } from '@nestjs/common';
import { CreateAvaliacaoAcomodacoeDto } from './dto/create-avaliacao_acomodacoe.dto';
import { UpdateAvaliacaoAcomodacoeDto } from './dto/update-avaliacao_acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AvaliacaoAcomodacoesService {
  constructor(private prisma: PrismaService) {}
  create(createAvaliacaoAcomodacoeDto: CreateAvaliacaoAcomodacoeDto) {
    const CriarAvaliacaoAcomodacoe = this.prisma.avaliacao_acomodacao.create({
      data: createAvaliacaoAcomodacoeDto,
    });
    return CriarAvaliacaoAcomodacoe;
  }

  findAll(findAllAvaliacaoAcomodacoeDto: any) {
    const AcharTodasAvaliacoesAcomodacoes =
      this.prisma.avaliacao_acomodacao.findMany({
        where: findAllAvaliacaoAcomodacoeDto,
      });
    return AcharTodasAvaliacoesAcomodacoes;
  }

  findOne(findOneAvaliacaoAcomodacoeDto: any) {
    const AcharUmaAvaliacaoAcomodacoe =
      this.prisma.avaliacao_acomodacao.findUnique({
        where: findOneAvaliacaoAcomodacoeDto,
      });
    return AcharUmaAvaliacaoAcomodacoe;
  }

  update(id: number, UpdateAvaliacaoAcomodacoeDto: UpdateAvaliacaoAcomodacoeDto) {
    const avaliacaoAcomodacao = this.prisma.avaliacao_acomodacao.update({
      where: {id},
      data: UpdateAvaliacaoAcomodacoeDto,
    })
    return avaliacaoAcomodacao;
  }

  remove(deleteAvaliacaoAcomodacoeDto: any) {
    const DeletarAvaliacaoAcomodacoe = this.prisma.avaliacao_acomodacao.delete({
      where: deleteAvaliacaoAcomodacoeDto,
    });
    return DeletarAvaliacaoAcomodacoe;
  }
}

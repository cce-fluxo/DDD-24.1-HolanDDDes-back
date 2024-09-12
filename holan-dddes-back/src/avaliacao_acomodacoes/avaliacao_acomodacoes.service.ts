import { Injectable } from '@nestjs/common';
import { CreateAvaliacaoAcomodacoeDto } from './dto/create-avaliacao_acomodacoe.dto';
import { UpdateAvaliacaoAcomodacoeDto } from './dto/update-avaliacao_acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AvaliacaoAcomodacoesService {
  constructor(private prisma: PrismaService) {}
  create(createAvaliacaoAcomodacoeDto: CreateAvaliacaoAcomodacoeDto) {
    const CriarAvaliacaoAcomodacoe = this.prisma.avaliacaoAcomodacoe.create({
      data: createAvaliacaoAcomodacoeDto,
    });
    return CriarAvaliacaoAcomodacoe;
  }

  findAll(findAllAvaliacaoAcomodacoeDto: any) {
    const AcharTodasAvaliacoesAcomodacoes =
      this.prisma.avaliacaoAcomodacoe.findMany({
        where: findAllAvaliacaoAcomodacoeDto,
      });
    return AcharTodasAvaliacoesAcomodacoes;
  }

  findOne(findOneAvaliacaoAcomodacoeDto: any) {
    const AcharUmaAvaliacaoAcomodacoe =
      this.prisma.avaliacaoAcomodacoe.findUnique({
        where: findOneAvaliacaoAcomodacoeDto,
      });
    return AcharUmaAvaliacaoAcomodacoe;
  }

  update(
    p0: number,
    updateAvaliacaoAcomodacoeDto: UpdateAvaliacaoAcomodacoeDto,
  ) {
    const AtualizarAvaliacaoAcomodacoe = this.prisma.avaliacaoAcomodacoe.update({
        where: { id: updateAvaliacaoAcomodacoeDto.id },
        data: updateAvaliacaoAcomodacoeDto,
      });
    return AtualizarAvaliacaoAcomodacoe;
  }

  remove(deleteAvaliacaoAcomodacoeDto: any) {
    const DeletarAvaliacaoAcomodacoe = this.prisma.avaliacaoAcomodacoe.delete({
      where: deleteAvaliacaoAcomodacoeDto,
    });
    return DeletarAvaliacaoAcomodacoe;
  }
}

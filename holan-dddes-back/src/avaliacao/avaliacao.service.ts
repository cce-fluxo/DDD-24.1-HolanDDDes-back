import { Injectable } from '@nestjs/common';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AvaliacaoService {
  constructor(private prisma: PrismaService) {}
  create(createAvaliacaoDto: CreateAvaliacaoDto) {
    const CriarAvaliacao = this.prisma.avaliacao.create({
      data: createAvaliacaoDto,
    });
    return CriarAvaliacao;
  }

  findAll(findAllAvaliacaoDto: any) {
    const BuscarAvaliacao = this.prisma.avaliacao.findMany({
      where: findAllAvaliacaoDto,
    });
    return BuscarAvaliacao;
  }

  findOne(findOneAvaliacaoDto: any) {
    const BuscarAvaliacao = this.prisma.avaliacao.findUnique({
      where: findOneAvaliacaoDto,
    });
    return BuscarAvaliacao;
  }

  update(p0: number, UpdateAvaliacaoDto: UpdateAvaliacaoDto) {
    const AtualizarAvaliacao = this.prisma.avaliacao.update({
      where: { id: UpdateAvaliacaoDto.id },
      data: UpdateAvaliacaoDto,
    });
    return AtualizarAvaliacao;
  }

  remove(DeleteAvaliacaoDto: any) {
    const DeletarAvaliacao = this.prisma.avaliacao.delete({
      where: DeleteAvaliacaoDto,
    });
    return DeletarAvaliacao;
  }
}

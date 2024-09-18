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

  async findOne(id: number) {
    return await this.prisma.avaliacao.findUnique({where: {id}});
  }


  update(id: number, UpdateAvaliacaoDto: UpdateAvaliacaoDto) {
    const avaliacao = this.prisma.avaliacao.update({
      where: {id},
      data: UpdateAvaliacaoDto,
    })
    return avaliacao;
  }

  remove(DeleteAvaliacaoDto: any) {
    const DeletarAvaliacao = this.prisma.avaliacao.delete({
      where: DeleteAvaliacaoDto,
    });
    return DeletarAvaliacao;
  }
}

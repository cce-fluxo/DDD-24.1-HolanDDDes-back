import { Injectable } from '@nestjs/common';
import { CreateFotosAcomodacaoDto } from './dto/create-fotos_acomodacoe.dto';
import { UpdateFotosAcomodacaoDto } from './dto/update-fotos_acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class FotosAcomodacoesService {
  constructor(private prisma: PrismaService) {}
  create(CreateFotosAcomodacaoDto: CreateFotosAcomodacaoDto) {
    const CriarfotosAcomodacao = this.prisma.foto_Acomodacao.create({
      data: CreateFotosAcomodacaoDto,
    });
    return CriarfotosAcomodacao;
  }

  findAll(findAllfotosAcomodacaoDto: any) {
    const AcharTodasfotosAcomodacaos = this.prisma.foto_Acomodacao.findMany({
      where: findAllfotosAcomodacaoDto,
    });
    return AcharTodasfotosAcomodacaos;
  }

  findOne(findOnefotosAcomodacaoDto: any) {
    const AcharUmafotosAcomodacao = this.prisma.foto_Acomodacao.findUnique({
      where: findOnefotosAcomodacaoDto,
    });
    return AcharUmafotosAcomodacao;
  }

  update(id: number, UpdateFotosAcomodacaoDto: UpdateFotosAcomodacaoDto) {
    const fotosAcomodacao = this.prisma.foto_Acomodacao.update({
      where: {id},
      data: UpdateFotosAcomodacaoDto,
    })
    return fotosAcomodacao
  }

  remove(deletefotosAcomodacaoDto: any) {
    const DeletarfotosAcomodacao = this.prisma.foto_Acomodacao.delete({
      where: deletefotosAcomodacaoDto,
    });
    return DeletarfotosAcomodacao;
  }
}

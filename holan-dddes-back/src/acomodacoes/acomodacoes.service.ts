import { Injectable } from '@nestjs/common';
import { CreateAcomodacoeDto } from './dto/create-acomodacoe.dto';
import { UpdateAcomodacoeDto } from './dto/update-acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AcomodacoesService {
  constructor(private prisma: PrismaService) {}
  create(createAcomodacoeDto: CreateAcomodacoeDto) {
    const CriarAcomodacao = this.prisma.acomodacao.create({
      data: createAcomodacoeDto,
    });
    return CriarAcomodacao;
  }

  findAll(findAllAcomaodacoesDto: any) {
    const AcharTodasAcomodacoes = this.prisma.acomodacao.findMany({
      where: findAllAcomaodacoesDto,
    });
    return AcharTodasAcomodacoes;
  }

  findOne(findOneAcomodacoeDto: any) {
    const AcharUmaAcomodacao = this.prisma.acomodacao.findUnique({
      where: findOneAcomodacoeDto,
    });
    return AcharUmaAcomodacao;
  }

  update(id: number, UpdateAcomodacoeDto: UpdateAcomodacoeDto) {
    const acomodacao = this.prisma.acomodacao.update({
      where: {id},
      data: UpdateAcomodacoeDto,
    })
    return acomodacao;
  }

  remove(DeleteAcomodacoeDto: any) {
    const DeletarAcomodacao = this.prisma.acomodacao.delete({
      where: DeleteAcomodacoeDto,
    });
    return DeletarAcomodacao;
  }
}

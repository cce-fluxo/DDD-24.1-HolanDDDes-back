import { Injectable } from '@nestjs/common';
import { CreateAcomodacoeDto } from './dto/create-acomodacoe.dto';
import { UpdateAcomodacoeDto } from './dto/update-acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AcomodacoesService {
  constructor(private prisma: PrismaService) {}
  create(createAcomodacoeDto: CreateAcomodacoeDto) {
    const CriarAcomodacao = this.prisma.acomodacoe.create({
      data: createAcomodacoeDto,
    });
    return CriarAcomodacao;
  }

  findAll(findAllAcomaodacoesDto: any) {
    const AcharTodasAcomodacoes = this.prisma.acomodacoe.findMany({
      where: findAllAcomaodacoesDto,
    });
    return AcharTodasAcomodacoes;
  }

  findOne(findOneAcomodacoeDto: any) {
    const AcharUmaAcomodacao = this.prisma.acomodacoe.findUnique({
      where: findOneAcomodacoeDto,
    });
    return AcharUmaAcomodacao;
  }

  update(p0: number, updateAcomodacoeDto: UpdateAcomodacoeDto) {
    const AtualizarAcomodacao = this.prisma.acomodacoe.update({
      where: { id: updateAcomodacoeDto.id },
      data: updateAcomodacoeDto,
    });
    return AtualizarAcomodacao;
  }

  remove(DeleteAcomodacoeDto: any) {
    const DeletarAcomodacao = this.prisma.acomodacoe.delete({
      where: DeleteAcomodacoeDto,
    });
    return DeletarAcomodacao;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateComodidadeAcomodacoeDto } from './dto/create-comodidade_acomodacoe.dto';
import { UpdateComodidadeAcomodacoeDto } from './dto/update-comodidade_acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ComodidadeAcomodacoesService {
  constructor(private prisma: PrismaService) {}
  create(createComodidadeAcomodacoeDto: CreateComodidadeAcomodacoeDto) {
    const CriarComodidadeAcomodacoe = this.prisma.comodidadeAcomodacoe.create({
      data: createComodidadeAcomodacoeDto,
    });
    return CriarComodidadeAcomodacoe;
  }

  findAll(findAllComodidadeAcomodacoeDto: any) {
    const AcharTodasComodidadesAcomodacoes =
      this.prisma.comodidadeAcomodacoe.findMany({
        where: findAllComodidadeAcomodacoeDto,
      });
    return AcharTodasComodidadesAcomodacoes;
  }

  findOne(findOneComodidadeAcomodacoeDto: any) {
    const AcharUmaComodidadeAcomodacoe =
      this.prisma.comodidadeAcomodacoe.findUnique({
        where: findOneComodidadeAcomodacoeDto,
      });
    return AcharUmaComodidadeAcomodacoe;
  }

  update(
    p0: number,
    updateComodidadeAcomodacoeDto: UpdateComodidadeAcomodacoeDto,
  ) {
    const AtualizarComodidadeAcomodacoe =
      this.prisma.comodidadeAcomodacoe.update({
        where: { id: updateComodidadeAcomodacoeDto.id },
        data: updateComodidadeAcomodacoeDto,
      });
    return AtualizarComodidadeAcomodacoe;
  }

  remove(deleteComodidadeAcomodacoeDto: any) {
    const DeletarComodidadeAcomodacoe = this.prisma.comodidadeAcomodacoe.delete(
      {
        where: deleteComodidadeAcomodacoeDto,
      },
    );
    return DeletarComodidadeAcomodacoe;
  }
}

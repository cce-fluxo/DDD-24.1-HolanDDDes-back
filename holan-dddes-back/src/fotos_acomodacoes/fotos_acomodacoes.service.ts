import { Injectable } from '@nestjs/common';
import { CreateFotosAcomodacoeDto } from './dto/create-fotos_acomodacoe.dto';
import { UpdateFotosAcomodacoeDto } from './dto/update-fotos_acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class FotosAcomodacoesService {
  constructor(private prisma: PrismaService) {}
  create(createFotosAcomodacoeDto: CreateFotosAcomodacoeDto) {
    const CriarFotosAcomodacoe = this.prisma.fotosAcomodacoe.create({
      data: createFotosAcomodacoeDto,
    });
    return CriarFotosAcomodacoe;
  }

  findAll(findAllFotosAcomodacoeDto: any) {
    const AcharTodasFotosAcomodacoes = this.prisma.fotosAcomodacoe.findMany({
      where: findAllFotosAcomodacoeDto,
    });
    return AcharTodasFotosAcomodacoes;
  }

  findOne(findOneFotosAcomodacoeDto: any) {
    const AcharUmaFotosAcomodacoe = this.prisma.fotosAcomodacoe.findUnique({
      where: findOneFotosAcomodacoeDto,
    });
    return AcharUmaFotosAcomodacoe;
  }

  update(p0: number, updateFotosAcomodacoeDto: UpdateFotosAcomodacoeDto) {
    const AtualizarFotosAcomodacoe = this.prisma.fotosAcomodacoe.update({
      where: { id: updateFotosAcomodacoeDto.id },
      data: updateFotosAcomodacoeDto,
    });
    return AtualizarFotosAcomodacoe;
  }

  remove(deleteFotosAcomodacoeDto: any) {
    const DeletarFotosAcomodacoe = this.prisma.fotosAcomodacoe.delete({
      where: deleteFotosAcomodacoeDto,
    });
    return DeletarFotosAcomodacoe;
  }
}

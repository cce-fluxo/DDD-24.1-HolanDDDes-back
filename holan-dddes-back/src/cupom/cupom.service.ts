import { Injectable } from '@nestjs/common';
import { CreateCupomDto } from './dto/create-cupom.dto';
import { UpdateCupomDto } from './dto/update-cupom.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class CupomService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCupomDto: CreateCupomDto) {
    const CriarCupom = this.prisma.cupom.create({
      data: createCupomDto,
    });
    return CriarCupom;
  }

  findAll(findAllCupomDto: any) {
    const AcharTodosCupons = this.prisma.cupom.findMany({
      where: findAllCupomDto,
    });
    return AcharTodosCupons;
  }

  findOne(findOneCupomDto: any) {
    const AcharUmCupom = this.prisma.cupom.findUnique({
      where: findOneCupomDto,
    });
    return AcharUmCupom;
  }

  update(p0: number, updateCupomDto: UpdateCupomDto) {
    const AtualizarCupom = this.prisma.cupom.update({
      where: { id: updateCupomDto.id },
      data: updateCupomDto,
    });
    return AtualizarCupom;
  }

  remove(deleteCupomDto: any) {
    const DeletarCupom = this.prisma.cupom.delete({
      where: deleteCupomDto,
    });
    return DeletarCupom;
  }
}

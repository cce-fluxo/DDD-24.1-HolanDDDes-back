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

  async findOne(id: number) {
    return await this.prisma.cupom.findUnique({where: {id}});
  }

  update(id: number, UpdateCupomDto: UpdateCupomDto) {
    const cupom = this.prisma.cupom.update({
      where: {id},
      data: UpdateCupomDto,
    })
    return cupom;
  }

  remove(deleteCupomDto: any) {
    const DeletarCupom = this.prisma.cupom.delete({
      where: deleteCupomDto,
    });
    return DeletarCupom;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateComodidadesHoteiDto } from './dto/create-comodidades_hotei.dto';
import { UpdateComodidadesHoteiDto } from './dto/update-comodidades_hotei.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ComodidadesHoteisService {
  constructor(private prisma: PrismaService) {}
  create(createComodidadesHoteiDto: CreateComodidadesHoteiDto) {
    const criarComodidadesHotei = this.prisma.comodidadesHotei.create({
      data: createComodidadesHoteiDto,
    });
    return criarComodidadesHotei;
  }

  findAll(findAllComodidadesHoteiDto: any) {
    const acharTodasComodidadesHoteis = this.prisma.comodidadesHotei.findMany({
      where: findAllComodidadesHoteiDto,
    });
    return acharTodasComodidadesHoteis;
  }

  findOne(findOneComodidadesHoteiDto: any) {
    const acharUmaComodidadesHotei = this.prisma.comodidadesHotei.findUnique({
      where: findOneComodidadesHoteiDto,
    });
    return acharUmaComodidadesHotei;
  }

  update(p0: number, updateComodidadesHoteiDto: UpdateComodidadesHoteiDto) {
    const atualizarComodidadesHotei = this.prisma.comodidadesHotei.update({
      where: { id: updateComodidadesHoteiDto.id },
      data: updateComodidadesHoteiDto,
    });
    return atualizarComodidadesHotei;
  }

  remove(deleteComodidadesHoteiDto: any) {
    const deletarComodidadesHotei = this.prisma.comodidadesHotei.delete({
      where: deleteComodidadesHoteiDto,
    });
    return deletarComodidadesHotei;
  }
}

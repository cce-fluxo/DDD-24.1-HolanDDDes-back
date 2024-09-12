import { Injectable } from '@nestjs/common';
import { CreateHoteiDto } from './dto/create-hotei.dto';
import { UpdateHoteiDto } from './dto/update-hotei.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class HoteisService {
  constructor(private prisma: PrismaService) {}
  create(createHoteiDto: CreateHoteiDto) {
    const CriarHotei = this.prisma.hotei.create({
      data: createHoteiDto,
    });
    return CriarHotei;
  }

  findAll(findAllHoteiDto: any) {
    const AcharTodosHoteis = this.prisma.hotei.findMany({
      where: findAllHoteiDto,
    });
    return AcharTodosHoteis;
  }

  findOne(findOneHoteiDto: any) {
    const AcharUmHotei = this.prisma.hotei.findUnique({
      where: findOneHoteiDto,
    });
    return AcharUmHotei;
  }

  update(p0: number, updateHoteiDto: UpdateHoteiDto) {
    const AtualizarHotei = this.prisma.hotei.update({
      where: { id: updateHoteiDto.id },
      data: updateHoteiDto,
    });
    return AtualizarHotei;
  }

  remove(deleteHoteiDto: any) {
    const DeletarHotei = this.prisma.hotei.delete({
      where: deleteHoteiDto,
    });
    return DeletarHotei;
  }
}

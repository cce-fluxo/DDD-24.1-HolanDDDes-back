import { Injectable } from '@nestjs/common';
import { CreateFotosHoteiDto } from './dto/create-fotos_hotei.dto';
import { UpdateFotosHoteiDto } from './dto/update-fotos_hotei.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class FotosHoteisService {
  constructor(private prisma: PrismaService) {}
  create(createFotosHoteiDto: CreateFotosHoteiDto) {
    const criarFotosHotei = this.prisma.fotosHotei.create({
      data: createFotosHoteiDto,
    });
    return criarFotosHotei;
  }

  findAll(findAllFotosHoteiDto: any) {
    const acharTodasFotosHoteis = this.prisma.fotosHotei.findMany({
      where: findAllFotosHoteiDto,
    });
    return acharTodasFotosHoteis;
  }

  findOne(findOneFotosHoteiDto: any) {
    const acharUmaFotosHotei = this.prisma.fotosHotei.findUnique({
      where: findOneFotosHoteiDto,
    });
    return acharUmaFotosHotei;
  }

  update(p0: number, updateFotosHoteiDto: UpdateFotosHoteiDto) {
    const atualizarFotosHotei = this.prisma.fotosHotei.update({
      where: { id: updateFotosHoteiDto.id },
      data: updateFotosHoteiDto,
    });
    return atualizarFotosHotei;
  }

  remove(deleteFotosHoteiDto: any) {
    const deletarFotosHotei = this.prisma.fotosHotei.delete({
      where: deleteFotosHoteiDto,
    });
    return deletarFotosHotei;
  }
}

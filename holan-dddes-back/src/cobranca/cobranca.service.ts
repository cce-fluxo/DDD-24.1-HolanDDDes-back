import { Injectable } from '@nestjs/common';
import { CreateCobrancaDto } from './dto/create-cobranca.dto';
import { UpdateCobrancaDto } from './dto/update-cobranca.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class CobrancaService {
  constructor(private prisma: PrismaService) {}
  create(createCobrancaDto: CreateCobrancaDto) {
    const CriarCobranca = this.prisma.cobranca.create({
      data: createCobrancaDto,
    });
    return CriarCobranca;
  }

  findAll(findAllCobrancaDto: any) {
    const AcharTodasCobrancas = this.prisma.cobranca.findMany({
      where: findAllCobrancaDto,
    });
    return AcharTodasCobrancas;
  }

  findOne(findOneCobrancaDto: any) {
    const AcharUmaCobranca = this.prisma.cobranca.findUnique({
      where: findOneCobrancaDto,
    });
    return AcharUmaCobranca;
  }

  update(id: number, UpdateCobrancaDto: UpdateCobrancaDto) {
    const cobranca = this.prisma.cobranca.update({
      where: {id},
      data: UpdateCobrancaDto,
    })
    return cobranca
  }

  remove(deleteCobrancaDto: any) {
    const DeletarCobranca = this.prisma.cobranca.delete({
      where: deleteCobrancaDto,
    });
    return DeletarCobranca;
  }
}

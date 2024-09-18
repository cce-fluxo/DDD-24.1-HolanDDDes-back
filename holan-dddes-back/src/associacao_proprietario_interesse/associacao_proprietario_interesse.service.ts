import { Injectable } from '@nestjs/common';
import { CreateAssociacaoProprietarioInteresseDto } from './dto/create-associacao_proprietario_interesse.dto';
import { UpdateAssociacaoProprietarioInteresseDto } from './dto/update-associacao_proprietario_interesse.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AssociacaoProprietarioInteresseService {
  constructor(private prisma: PrismaService) {}
  create(createAssociacaoProprietarioInteresseDto: CreateAssociacaoProprietarioInteresseDto) {
    return this.prisma.proprietarioNoInteresse.create({
        data: createAssociacaoProprietarioInteresseDto,
      });
  }

  findAll(findAllAssociacaoDto: any) {
    return this.prisma.proprietarioNoInteresse.findMany({
        where: findAllAssociacaoDto,
      });
  }

  findOne(id: number) {
    return this.prisma.proprietarioNoInteresse.findUnique({
      where: {id},
    });
  }

  update(id: number, updateAssociacaoProprietarioInteresseDto: UpdateAssociacaoProprietarioInteresseDto) {
    return this.prisma.proprietarioNoInteresse.update({
      where: {id},
      data: updateAssociacaoProprietarioInteresseDto,
    });
  }

  remove(id: number) {
    return this.prisma.proprietarioNoInteresse.delete({
      where: {id},
    });
  }
}


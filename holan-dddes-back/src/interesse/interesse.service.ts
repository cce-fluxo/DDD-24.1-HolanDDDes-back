import { Injectable } from '@nestjs/common';
import { CreateInteresseDto } from './dto/create-interesse.dto';
import { UpdateInteresseDto } from './dto/update-interesse.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class InteresseService {
  constructor(private readonly prisma: PrismaService) {}
  create(createInteresseDto: CreateInteresseDto) {
    const criarInteresse = this.prisma.interesse.create({
      data: createInteresseDto,
    });
    return criarInteresse;
  }

  findAll(findAllInteresseDto: any) {
    const acharTodosInteresses = this.prisma.interesse.findMany({
      where: findAllInteresseDto,
    });
    return acharTodosInteresses;
  }

  async findOne(id: number) {
    return await this.prisma.interesse.findUnique({where: {id}});
  }

  update(id: number, UpdateInteresseDto: UpdateInteresseDto) {
    const interesse = this.prisma.interesse.update({
      where: {id},
      data: UpdateInteresseDto,
    })
    return interesse
  }

  async remove(id: number) {
    return await this.prisma.interesse.delete({where: {id}});
  }

  getProprietariosByInteresse(interesseId:number) {
    return this.prisma.interesse.findUnique({
      where: {id: interesseId},
      select: {Proprietario: true},
    })
  }
}

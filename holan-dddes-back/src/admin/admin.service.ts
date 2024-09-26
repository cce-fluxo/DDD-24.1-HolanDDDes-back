/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}
  create(CreateAdminDto: CreateAdminDto) {
    const criarAdmin = this.prisma.admin.create({
      data: CreateAdminDto,
    });
    return criarAdmin;
  }

  findAll(findAllAdminDto: any) {
    const acharTodosAdmin = this.prisma.admin.findMany({
      where: findAllAdminDto,
    });
    return acharTodosAdmin;
  }

  async findOne(id: number) {
    return await this.prisma.admin.findUnique({where: {id}});
  }

  update(id: number, UpdateAdminDto: UpdateAdminDto) {
    const admin = this.prisma.admin.update({
      where: {id},
      data: UpdateAdminDto,
    })
    return admin;
  }

  async remove(id: number) {
    return await this.prisma.admin.delete({where: {id}});
  }
}

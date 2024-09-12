import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  acomodacoe: any;
  avaliacao: any;
  avaliacaoAcomodacoe: any;
  async onModuleInit() {
    await this.$connect();
  }
}

import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  acomodacoe: any;
  avaliacao: any;
  avaliacaoAcomodacoe: any;
  usuario: any;
  tipoAcomodacoe: any;
  reserva: any;
  proprietario: any;
  notificacao: any;
  interesse: any;
  hotei: any;
  gerenciamentoGanhoAcomodacao: any;
  gerenciamentoGanho: any;
  fotosHotei: any;
  fotosAcomodacoe: any;
  fotoUsuario: any;
  favorito: any;
  endereco: any;
  descricaoDetalhada: any;
  cupom: any;
  comodidadesHotei: any;
  comodidadeAcomodacoe: any;
  cobranca: any;
  cliente: any;

  async onModuleInit() {
    await this.$connect();
  }
}

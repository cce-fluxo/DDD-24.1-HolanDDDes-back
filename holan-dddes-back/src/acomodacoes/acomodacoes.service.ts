import { Injectable } from '@nestjs/common';
import { CreateAcomodacoeDto } from './dto/create-acomodacoe.dto';
import { UpdateAcomodacoeDto } from './dto/update-acomodacoe.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AcomodacoesService {
  constructor(private prisma: PrismaService) {}
  create(createAcomodacoeDto: CreateAcomodacoeDto) {
    const CriarAcomodacao = this.prisma.acomodacao.create({
      data: createAcomodacoeDto,
    });
    return CriarAcomodacao;
  }

  async findAvaliacao(acomodacaoId: any) {
    // Faz uma consulta no banco de dados para encontrar uma acomodação com o ID especificado
    const acomodacao = await this.prisma.acomodacao.findUnique({
      where: { id: acomodacaoId }, // Busca a acomodação com base no ID fornecido
      include: { Avaliacao_acomodacao: true }, // Inclui as avaliações associadas à acomodação
    });

    // Retorna a acomodação e todas as suas avaliações
    return acomodacao;
  }

  async findFoto(acomodacaoId: any) {
    // Faz uma consulta no banco de dados para encontrar uma acomodação com o ID especificado
    const acomodacao = await this.prisma.acomodacao.findUnique({
      where: { id: acomodacaoId }, // Busca a acomodação com base no ID fornecido
      include: { FotoAcomodacao: true }, // Inclui as fotos associadas à acomodação
    });

    // Retorna a acomodação e todas as suas avaliações
    return acomodacao;
  }

  async findComodidade(acomodacaoId: any) {
    // Faz uma consulta no banco de dados para encontrar uma acomodação com o ID especificado
    const acomodacao = await this.prisma.acomodacao.findUnique({
      where: { id: acomodacaoId }, // Busca a acomodação com base no ID fornecido
      include: { ComodidadeAcomodacao: true }, // Inclui as comodidades associadas à acomodação
    });

    // Retorna a acomodação e todas as suas avaliações
    return acomodacao;
  }

  findAll(findAllAcomaodacoesDto: any) {
    const AcharTodasAcomodacoes = this.prisma.acomodacao.findMany({
      where: findAllAcomaodacoesDto,
    });
    return AcharTodasAcomodacoes;
  }

  findOne(findOneAcomodacoeDto: any) {
    const AcharUmaAcomodacao = this.prisma.acomodacao.findUnique({
      where: findOneAcomodacoeDto,
    });
    return AcharUmaAcomodacao;
  }

  update(id: number, UpdateAcomodacoeDto: UpdateAcomodacoeDto) {
    const acomodacao = this.prisma.acomodacao.update({
      where: {id},
      data: UpdateAcomodacoeDto,
    })
    return acomodacao;
  }

  remove(DeleteAcomodacoeDto: any) {
    const DeletarAcomodacao = this.prisma.acomodacao.delete({
      where: DeleteAcomodacoeDto,
    });
    return DeletarAcomodacao;
  }
}

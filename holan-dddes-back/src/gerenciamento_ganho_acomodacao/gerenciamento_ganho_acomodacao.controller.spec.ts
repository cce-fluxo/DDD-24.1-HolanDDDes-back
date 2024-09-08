import { Test, TestingModule } from '@nestjs/testing';
import { GerenciamentoGanhoAcomodacaoController } from './gerenciamento_ganho_acomodacao.controller';
import { GerenciamentoGanhoAcomodacaoService } from './gerenciamento_ganho_acomodacao.service';

describe('GerenciamentoGanhoAcomodacaoController', () => {
  let controller: GerenciamentoGanhoAcomodacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GerenciamentoGanhoAcomodacaoController],
      providers: [GerenciamentoGanhoAcomodacaoService],
    }).compile();

    controller = module.get<GerenciamentoGanhoAcomodacaoController>(GerenciamentoGanhoAcomodacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

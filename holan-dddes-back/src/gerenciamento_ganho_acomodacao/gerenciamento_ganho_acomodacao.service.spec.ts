import { Test, TestingModule } from '@nestjs/testing';
import { GerenciamentoGanhoAcomodacaoService } from './gerenciamento_ganho_acomodacao.service';

describe('GerenciamentoGanhoAcomodacaoService', () => {
  let service: GerenciamentoGanhoAcomodacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GerenciamentoGanhoAcomodacaoService],
    }).compile();

    service = module.get<GerenciamentoGanhoAcomodacaoService>(GerenciamentoGanhoAcomodacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

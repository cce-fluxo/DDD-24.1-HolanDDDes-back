import { Test, TestingModule } from '@nestjs/testing';
import { AvaliacaoAcomodacoesService } from './avaliacao_acomodacoes.service';

describe('AvaliacaoAcomodacoesService', () => {
  let service: AvaliacaoAcomodacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvaliacaoAcomodacoesService],
    }).compile();

    service = module.get<AvaliacaoAcomodacoesService>(AvaliacaoAcomodacoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

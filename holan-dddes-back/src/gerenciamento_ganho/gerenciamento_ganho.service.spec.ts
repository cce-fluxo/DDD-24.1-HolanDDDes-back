import { Test, TestingModule } from '@nestjs/testing';
import { GerenciamentoGanhoService } from './gerenciamento_ganho.service';

describe('GerenciamentoGanhoService', () => {
  let service: GerenciamentoGanhoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GerenciamentoGanhoService],
    }).compile();

    service = module.get<GerenciamentoGanhoService>(GerenciamentoGanhoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

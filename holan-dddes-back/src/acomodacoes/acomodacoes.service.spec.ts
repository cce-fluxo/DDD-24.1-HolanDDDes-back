import { Test, TestingModule } from '@nestjs/testing';
import { AcomodacoesService } from './acomodacoes.service';

describe('AcomodacoesService', () => {
  let service: AcomodacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcomodacoesService],
    }).compile();

    service = module.get<AcomodacoesService>(AcomodacoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

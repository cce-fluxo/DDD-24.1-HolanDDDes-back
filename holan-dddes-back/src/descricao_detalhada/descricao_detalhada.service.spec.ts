import { Test, TestingModule } from '@nestjs/testing';
import { DescricaoDetalhadaService } from './descricao_detalhada.service';

describe('DescricaoDetalhadaService', () => {
  let service: DescricaoDetalhadaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DescricaoDetalhadaService],
    }).compile();

    service = module.get<DescricaoDetalhadaService>(DescricaoDetalhadaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

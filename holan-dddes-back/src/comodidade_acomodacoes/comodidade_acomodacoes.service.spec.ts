import { Test, TestingModule } from '@nestjs/testing';
import { ComodidadeAcomodacoesService } from './comodidade_acomodacoes.service';

describe('ComodidadeAcomodacoesService', () => {
  let service: ComodidadeAcomodacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComodidadeAcomodacoesService],
    }).compile();

    service = module.get<ComodidadeAcomodacoesService>(ComodidadeAcomodacoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

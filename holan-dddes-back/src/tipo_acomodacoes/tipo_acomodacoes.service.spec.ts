import { Test, TestingModule } from '@nestjs/testing';
import { TipoAcomodacoesService } from './tipo_acomodacoes.service';

describe('TipoAcomodacoesService', () => {
  let service: TipoAcomodacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoAcomodacoesService],
    }).compile();

    service = module.get<TipoAcomodacoesService>(TipoAcomodacoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

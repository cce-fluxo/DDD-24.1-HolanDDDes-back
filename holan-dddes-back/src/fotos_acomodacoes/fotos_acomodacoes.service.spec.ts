import { Test, TestingModule } from '@nestjs/testing';
import { FotosAcomodacoesService } from './fotos_acomodacoes.service';

describe('FotosAcomodacoesService', () => {
  let service: FotosAcomodacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FotosAcomodacoesService],
    }).compile();

    service = module.get<FotosAcomodacoesService>(FotosAcomodacoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

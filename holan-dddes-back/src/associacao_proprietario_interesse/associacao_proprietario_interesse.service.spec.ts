import { Test, TestingModule } from '@nestjs/testing';
import { AssociacaoProprietarioInteresseService } from './associacao_proprietario_interesse.service';

describe('AssociacaoProprietarioInteresseService', () => {
  let service: AssociacaoProprietarioInteresseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociacaoProprietarioInteresseService],
    }).compile();

    service = module.get<AssociacaoProprietarioInteresseService>(AssociacaoProprietarioInteresseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

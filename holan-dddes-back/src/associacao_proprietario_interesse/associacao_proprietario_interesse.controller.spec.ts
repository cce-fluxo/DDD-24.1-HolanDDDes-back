import { Test, TestingModule } from '@nestjs/testing';
import { AssociacaoProprietarioInteresseController } from './associacao_proprietario_interesse.controller';
import { AssociacaoProprietarioInteresseService } from './associacao_proprietario_interesse.service';

describe('AssociacaoProprietarioInteresseController', () => {
  let controller: AssociacaoProprietarioInteresseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociacaoProprietarioInteresseController],
      providers: [AssociacaoProprietarioInteresseService],
    }).compile();

    controller = module.get<AssociacaoProprietarioInteresseController>(AssociacaoProprietarioInteresseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

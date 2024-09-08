import { Test, TestingModule } from '@nestjs/testing';
import { AcomodacoesController } from './acomodacoes.controller';
import { AcomodacoesService } from './acomodacoes.service';

describe('AcomodacoesController', () => {
  let controller: AcomodacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcomodacoesController],
      providers: [AcomodacoesService],
    }).compile();

    controller = module.get<AcomodacoesController>(AcomodacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

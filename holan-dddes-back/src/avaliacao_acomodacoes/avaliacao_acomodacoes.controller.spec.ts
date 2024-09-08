import { Test, TestingModule } from '@nestjs/testing';
import { AvaliacaoAcomodacoesController } from './avaliacao_acomodacoes.controller';
import { AvaliacaoAcomodacoesService } from './avaliacao_acomodacoes.service';

describe('AvaliacaoAcomodacoesController', () => {
  let controller: AvaliacaoAcomodacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaliacaoAcomodacoesController],
      providers: [AvaliacaoAcomodacoesService],
    }).compile();

    controller = module.get<AvaliacaoAcomodacoesController>(AvaliacaoAcomodacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { GerenciamentoGanhoController } from './gerenciamento_ganho.controller';
import { GerenciamentoGanhoService } from './gerenciamento_ganho.service';

describe('GerenciamentoGanhoController', () => {
  let controller: GerenciamentoGanhoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GerenciamentoGanhoController],
      providers: [GerenciamentoGanhoService],
    }).compile();

    controller = module.get<GerenciamentoGanhoController>(GerenciamentoGanhoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ComodidadeAcomodacoesController } from './comodidade_acomodacoes.controller';
import { ComodidadeAcomodacoesService } from './comodidade_acomodacoes.service';

describe('ComodidadeAcomodacoesController', () => {
  let controller: ComodidadeAcomodacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComodidadeAcomodacoesController],
      providers: [ComodidadeAcomodacoesService],
    }).compile();

    controller = module.get<ComodidadeAcomodacoesController>(ComodidadeAcomodacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

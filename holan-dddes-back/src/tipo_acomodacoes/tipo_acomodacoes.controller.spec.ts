import { Test, TestingModule } from '@nestjs/testing';
import { TipoAcomodacoesController } from './tipo_acomodacoes.controller';
import { TipoAcomodacoesService } from './tipo_acomodacoes.service';

describe('TipoAcomodacoesController', () => {
  let controller: TipoAcomodacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoAcomodacoesController],
      providers: [TipoAcomodacoesService],
    }).compile();

    controller = module.get<TipoAcomodacoesController>(TipoAcomodacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

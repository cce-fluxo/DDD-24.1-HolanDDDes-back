import { Test, TestingModule } from '@nestjs/testing';
import { FotosAcomodacoesController } from './fotos_acomodacoes.controller';
import { FotosAcomodacoesService } from './fotos_acomodacoes.service';

describe('FotosAcomodacoesController', () => {
  let controller: FotosAcomodacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FotosAcomodacoesController],
      providers: [FotosAcomodacoesService],
    }).compile();

    controller = module.get<FotosAcomodacoesController>(FotosAcomodacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

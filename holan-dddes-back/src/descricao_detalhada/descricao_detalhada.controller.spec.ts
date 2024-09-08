import { Test, TestingModule } from '@nestjs/testing';
import { DescricaoDetalhadaController } from './descricao_detalhada.controller';
import { DescricaoDetalhadaService } from './descricao_detalhada.service';

describe('DescricaoDetalhadaController', () => {
  let controller: DescricaoDetalhadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DescricaoDetalhadaController],
      providers: [DescricaoDetalhadaService],
    }).compile();

    controller = module.get<DescricaoDetalhadaController>(DescricaoDetalhadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

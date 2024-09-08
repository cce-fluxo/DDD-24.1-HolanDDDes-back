import { Test, TestingModule } from '@nestjs/testing';
import { ComodidadesHoteisController } from './comodidades_hoteis.controller';
import { ComodidadesHoteisService } from './comodidades_hoteis.service';

describe('ComodidadesHoteisController', () => {
  let controller: ComodidadesHoteisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComodidadesHoteisController],
      providers: [ComodidadesHoteisService],
    }).compile();

    controller = module.get<ComodidadesHoteisController>(ComodidadesHoteisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

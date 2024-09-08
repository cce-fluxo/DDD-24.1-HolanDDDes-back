import { Test, TestingModule } from '@nestjs/testing';
import { FotosHoteisController } from './fotos_hoteis.controller';
import { FotosHoteisService } from './fotos_hoteis.service';

describe('FotosHoteisController', () => {
  let controller: FotosHoteisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FotosHoteisController],
      providers: [FotosHoteisService],
    }).compile();

    controller = module.get<FotosHoteisController>(FotosHoteisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

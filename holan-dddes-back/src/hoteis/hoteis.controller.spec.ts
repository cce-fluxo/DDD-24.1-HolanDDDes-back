import { Test, TestingModule } from '@nestjs/testing';
import { HoteisController } from './hoteis.controller';
import { HoteisService } from './hoteis.service';

describe('HoteisController', () => {
  let controller: HoteisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HoteisController],
      providers: [HoteisService],
    }).compile();

    controller = module.get<HoteisController>(HoteisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

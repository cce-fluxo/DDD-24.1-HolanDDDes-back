import { Test, TestingModule } from '@nestjs/testing';
import { HoteisService } from './hoteis.service';

describe('HoteisService', () => {
  let service: HoteisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoteisService],
    }).compile();

    service = module.get<HoteisService>(HoteisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

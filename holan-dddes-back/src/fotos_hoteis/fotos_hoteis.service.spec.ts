import { Test, TestingModule } from '@nestjs/testing';
import { FotosHoteisService } from './fotos_hoteis.service';

describe('FotosHoteisService', () => {
  let service: FotosHoteisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FotosHoteisService],
    }).compile();

    service = module.get<FotosHoteisService>(FotosHoteisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

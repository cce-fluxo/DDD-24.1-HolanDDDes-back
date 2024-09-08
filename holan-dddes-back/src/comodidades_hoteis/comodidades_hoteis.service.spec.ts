import { Test, TestingModule } from '@nestjs/testing';
import { ComodidadesHoteisService } from './comodidades_hoteis.service';

describe('ComodidadesHoteisService', () => {
  let service: ComodidadesHoteisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComodidadesHoteisService],
    }).compile();

    service = module.get<ComodidadesHoteisService>(ComodidadesHoteisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

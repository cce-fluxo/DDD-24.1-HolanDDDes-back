import { Test, TestingModule } from '@nestjs/testing';
import { AvaliacaoHotelService } from './avaliacao_hotel.service';

describe('AvaliacaoHotelService', () => {
  let service: AvaliacaoHotelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvaliacaoHotelService],
    }).compile();

    service = module.get<AvaliacaoHotelService>(AvaliacaoHotelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

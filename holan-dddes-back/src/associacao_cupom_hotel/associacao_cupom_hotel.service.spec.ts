import { Test, TestingModule } from '@nestjs/testing';
import { AssociacaoCupomHotelService } from './associacao_cupom_hotel.service';

describe('AssociacaoCupomHotelService', () => {
  let service: AssociacaoCupomHotelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociacaoCupomHotelService],
    }).compile();

    service = module.get<AssociacaoCupomHotelService>(AssociacaoCupomHotelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

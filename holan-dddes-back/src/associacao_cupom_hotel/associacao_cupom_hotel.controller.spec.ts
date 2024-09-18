import { Test, TestingModule } from '@nestjs/testing';
import { AssociacaoCupomHotelController } from './associacao_cupom_hotel.controller';
import { AssociacaoCupomHotelService } from './associacao_cupom_hotel.service';

describe('AssociacaoCupomHotelController', () => {
  let controller: AssociacaoCupomHotelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociacaoCupomHotelController],
      providers: [AssociacaoCupomHotelService],
    }).compile();

    controller = module.get<AssociacaoCupomHotelController>(AssociacaoCupomHotelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

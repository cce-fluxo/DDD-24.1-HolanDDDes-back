import { Test, TestingModule } from '@nestjs/testing';
import { AvaliacaoHotelController } from './avaliacao_hotel.controller';
import { AvaliacaoHotelService } from './avaliacao_hotel.service';

describe('AvaliacaoHotelController', () => {
  let controller: AvaliacaoHotelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaliacaoHotelController],
      providers: [AvaliacaoHotelService],
    }).compile();

    controller = module.get<AvaliacaoHotelController>(AvaliacaoHotelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

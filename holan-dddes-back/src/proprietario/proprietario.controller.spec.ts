import { Test, TestingModule } from '@nestjs/testing';
import { ProprietarioController } from './proprietario.controller';
import { ProprietarioService } from './proprietario.service';

describe('ProprietarioController', () => {
  let controller: ProprietarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProprietarioController],
      providers: [ProprietarioService],
    }).compile();

    controller = module.get<ProprietarioController>(ProprietarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PaintsController } from './paints.controller';

describe('PaintsController', () => {
  let controller: PaintsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaintsController],
    }).compile();

    controller = module.get<PaintsController>(PaintsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

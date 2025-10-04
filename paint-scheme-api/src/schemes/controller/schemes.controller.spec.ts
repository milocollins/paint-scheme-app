import { Test, TestingModule } from '@nestjs/testing';
import { SchemesController } from './schemes.controller';

describe('SchemesController', () => {
  let controller: SchemesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchemesController],
    }).compile();

    controller = module.get<SchemesController>(SchemesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PruductsController } from './pruducts.controller';

describe('PruductsController', () => {
  let controller: PruductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PruductsController],
    }).compile();

    controller = module.get<PruductsController>(PruductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

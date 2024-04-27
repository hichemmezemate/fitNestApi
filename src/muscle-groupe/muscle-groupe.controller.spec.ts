import { Test, TestingModule } from '@nestjs/testing';
import { MuscleGroupeController } from './muscle-groupe.controller';

describe('MuscleGroupeController', () => {
  let controller: MuscleGroupeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuscleGroupeController],
    }).compile();

    controller = module.get<MuscleGroupeController>(MuscleGroupeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

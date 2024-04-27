import { Test, TestingModule } from '@nestjs/testing';
import { MuscleGroupeService } from './muscle-groupe.service';

describe('MuscleGroupeService', () => {
  let service: MuscleGroupeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuscleGroupeService],
    }).compile();

    service = module.get<MuscleGroupeService>(MuscleGroupeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

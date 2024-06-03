// src/exercices/exercices.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ExercicesController } from './exercices.controller';
import { ExercicesService } from './exercices.service';
import { ExerciceEntity } from './exercice.entity/exercice.entity';
import { MuscleGroupeEntity } from "src/muscle-groupe/muscle-groupe.entity/muscle-groupe.entity";

describe('ExercicesController', () => {
  let controller: ExercicesController;
  let service: ExercicesService;

  const mockExercicesService = {
    getExercices: jest.fn(() => Promise.resolve([{ id: 1, nom_exercice: 'Test Exercice 1', image: "image.gif", description: "how to" }, { id: 2, nom_exercice: 'Test Exercice 2', image: "image.gif", description: "how to" }])),
    getExercice: jest.fn((id) => Promise.resolve({ id: id, nom_exercice: 'Test Exercice 1', image: "image.gif", description: "how to" })),
    createExercice: jest.fn((exercice) => exercice),
    updateExercice: jest.fn((exercice) => exercice),
    deleteExercice: jest.fn((id) => ({
      "raw": [],
      "affected": 1
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercicesController],
      providers: [
        {
          provide: ExercicesService,
          useValue: mockExercicesService,
        },
      ],
    }).compile();

    controller = module.get<ExercicesController>(ExercicesController);
    service = module.get<ExercicesService>(ExercicesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of exercices', async () => {
    const result = await controller.getAll();
    expect(result).toEqual([{ id: 1, nom_exercice: 'Test Exercice 1', image: "image.gif", description: "how to" }, { id: 2, nom_exercice: 'Test Exercice 2', image: "image.gif", description: "how to" }]);
    expect(service.getExercices).toHaveBeenCalled();
  });

  it('should return a single exercice', async () => {
    const id = 1;
    const result = await controller.get({ id });
    expect(result).toEqual({ id: id, nom_exercice: 'Test Exercice 1', image: "image.gif", description: "how to" });
    expect(service.getExercice).toHaveBeenCalledWith(id);
  });

  it('should create a new exercice', async () => {
    const exercice: ExerciceEntity = { id: 3, nom_exercice: 'Test Exercice 3', image: "image.gif", description: "how to" } as ExerciceEntity;
    const result = await controller.create(exercice);
    expect(result).toEqual(exercice);
    expect(service.createExercice).toHaveBeenCalledWith(exercice);
  });

  it('should update an exercice', async () => {
    const exercice: ExerciceEntity = { id: 1, nom_exercice: 'Updated Exercice', image: "image.gif", description: "how to" } as ExerciceEntity;
    const result = await controller.update(exercice);
    expect(result).toEqual(exercice);
    expect(service.updateExercice).toHaveBeenCalledWith(exercice);
  });

  it('should delete an exercice', async () => {
    const id = 1;
    const result = await controller.deleteExercice({ id });
    expect(result).toEqual({
      "raw": [],
      "affected": 1
  });
    expect(service.deleteExercice).toHaveBeenCalledWith(id);
  });
});
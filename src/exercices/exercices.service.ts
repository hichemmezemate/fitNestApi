import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciceEntity } from './exercice.entity/exercice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExercicesService {
    constructor(@InjectRepository(ExerciceEntity) private exerciceRepository: Repository<ExerciceEntity>) { }

    async getExercices(): Promise<ExerciceEntity[]> {
        return await this.exerciceRepository.find({relations: ["muscleGroupe"]});
    }

    async getExercice(_id: number): Promise<ExerciceEntity> {
        return await this.exerciceRepository.findOne({
            where: [{ "id": _id }],
            relations: ["muscleGroupe"]
        });
    }

     async createExercice(exercice: ExerciceEntity) {
        return await this.exerciceRepository.save(exercice)
    }


    async updateExercice(exercice: ExerciceEntity) {
        return await this.exerciceRepository.save(exercice)
    }

    async deleteExercice(exercice: ExerciceEntity) {
        return await this.exerciceRepository.delete(exercice);
    }
}

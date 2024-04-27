import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MuscleGroupeEntity } from './muscle-groupe.entity/muscle-groupe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MuscleGroupeService {
    constructor(@InjectRepository(MuscleGroupeEntity) private muscleGroupeRepository: Repository<MuscleGroupeEntity>) { }

    async getMuscleGroupes(): Promise<MuscleGroupeEntity[]> {
        return await this.muscleGroupeRepository.find({relations: ["exercices"]});
    }

    async getMuscleGroupe(_id: number): Promise<MuscleGroupeEntity> {
        return await this.muscleGroupeRepository.find({
            where: [{ "id": _id }],
            relations: ["exercices"]
        })[0];
    }

     async createMuscleGroupe(programme: MuscleGroupeEntity) {
        return await this.muscleGroupeRepository.save(programme)
    }


    async updateMuscleGroupe(programme: MuscleGroupeEntity) {
        return await this.muscleGroupeRepository.save(programme)
    }

    async deleteMuscleGroupe(programme: MuscleGroupeEntity) {
        return await this.muscleGroupeRepository.delete(programme);
    }
}

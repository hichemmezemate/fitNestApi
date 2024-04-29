import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgrammeEntity } from './programme.entity/programme.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgrammesService {
    constructor(@InjectRepository(ProgrammeEntity) private programmeRepository: Repository<ProgrammeEntity>) { }

    async getPrograms(): Promise<ProgrammeEntity[]> {
        return await this.programmeRepository.find({relations: ["exercices", "user"]});
    }

    async getProgram(_id: number): Promise<ProgrammeEntity> {
        return await this.programmeRepository.findOne({
            where: [{ "id": _id }],
            relations: ["exercices", "user"],
        });
    }

     async createProgram(programme: ProgrammeEntity) {
        return await this.programmeRepository.save(programme)
    }


    async updateProgram(programme: ProgrammeEntity) {
        return await this.programmeRepository.save(programme)
    }

    async deleteProgram(programme: ProgrammeEntity) {
        return await this.programmeRepository.delete(programme);
    }
}

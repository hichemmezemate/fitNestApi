import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgrammeEntity } from './programme.entity/programme.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgrammesService {
    constructor(@InjectRepository(ProgrammeEntity) private programmeRepository: Repository<ProgrammeEntity>) { }

    async getPrograms(): Promise<ProgrammeEntity[]> {
        return await this.programmeRepository.find();
    }

    async getProgram(_id: number): Promise<ProgrammeEntity> {
        return await this.programmeRepository.find({
            where: [{ "id": _id }]
        })[0];
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

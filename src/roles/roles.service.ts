import { Injectable } from '@nestjs/common';
import { RoleEntity } from './role.entity/role.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(RoleEntity) private rolesRepository: Repository<RoleEntity>) { }

    async getRoles(): Promise<RoleEntity[]> {
        return await this.rolesRepository.find();
    }

    async getRole(_id: number): Promise<RoleEntity> {
        return await this.rolesRepository.find({
            where: [{ "id": _id }],
        })[0];
    }

     async createRole(role: RoleEntity) {
        return await this.rolesRepository.save(role)
    }


    async updateRole(role: RoleEntity) {
        return await this.rolesRepository.save(role)
    }

    async deleteRole(role: RoleEntity) {
        return await this.rolesRepository.delete(role);
    }
}

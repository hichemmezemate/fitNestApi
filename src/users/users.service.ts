import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity/user.entity';
import { Repository } from 'typeorm';

const bcrypt = require('bcrypt')

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

    async getUsers(): Promise<UserEntity[]> {
        return await this.userRepository.find({relations:[ "role", "programme"]});
    }

    async getUser(_id: number): Promise<UserEntity> {
        return await this.userRepository.findOne({
            where: { id: _id }, 
            relations: ["role", "programme"]
        });
    }

     async createUser(user: UserEntity) {
        if(user.password){
            const password= user.password;
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(password, saltOrRounds);
            user.password= hash;
        }

        return await this.userRepository.save(user)
    }


    async updateUser(user: UserEntity) {
        if(user.password){
            const password= user.password;
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(password, saltOrRounds);
            user.password= hash;
        }

        return await this.userRepository.save(user)
    }

    async deleteUser(user: UserEntity) {
        return await this.userRepository.delete(user);
    }

    async findOne(username: string) {
        return await this.userRepository.findOneBy({email:username});
    }
}

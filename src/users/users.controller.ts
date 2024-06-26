import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) { }


    @Get()
    getAll() {
        return this.service.getUsers();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: UserEntity) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: UserEntity) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}

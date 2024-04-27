import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleEntity } from './role.entity/role.entity';

@Controller('roles')
export class RolesController {
    constructor(private service: RolesService) { }

    @Get()
    getAll() {
        return this.service.getRoles();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getRole(params.id);
    }

    @Post()
    create(@Body() role: RoleEntity) {
        return this.service.createRole(role);
    }

    @Put()
    update(@Body() role: RoleEntity) {
        return this.service.updateRole(role);
    }

    @Delete(':id')
    deleteRole(@Param() params) {
        return this.service.deleteRole(params.id);
    }
}

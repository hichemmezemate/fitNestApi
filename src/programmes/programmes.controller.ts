import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProgrammeEntity } from './programme.entity/programme.entity';
import { ProgrammesService } from './programmes.service';

@Controller('programmes')
export class ProgrammesController {
    constructor(private service: ProgrammesService) { }

    @Get()
    getAll() {
        return this.service.getPrograms();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getProgram(params.id);
    }

    @Post()
    create(@Body() programme: ProgrammeEntity) {
        return this.service.createProgram(programme);
    }

    @Put()
    update(@Body() programme: ProgrammeEntity) {
        return this.service.updateProgram(programme);
    }

    @Delete(':id')
    deleteProgram(@Param() params) {
        return this.service.deleteProgram(params.id);
    }
}

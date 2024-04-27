import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ExercicesService } from './exercices.service';
import { ExerciceEntity } from './exercice.entity/exercice.entity';

@Controller('exercices')
export class ExercicesController {
    constructor(private service: ExercicesService) { }

    @Get()
    getAll() {
        return this.service.getExercices();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getExercice(params.id);
    }

    @Post()
    create(@Body() exercice: ExerciceEntity) {
        return this.service.createExercice(exercice);
    }

    @Put()
    update(@Body() exercice: ExerciceEntity) {
        return this.service.updateExercice(exercice);
    }

    @Delete(':id')
    deleteExercice(@Param() params) {
        return this.service.deleteExercice(params.id);
    }
}

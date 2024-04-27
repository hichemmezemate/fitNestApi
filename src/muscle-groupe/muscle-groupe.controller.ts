import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MuscleGroupeService } from './muscle-groupe.service';
import { MuscleGroupeEntity } from './muscle-groupe.entity/muscle-groupe.entity';

@Controller('muscle-groupe')
export class MuscleGroupeController {
    constructor(private service: MuscleGroupeService) { }

    @Get()
    getAll() {
        return this.service.getMuscleGroupes();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getMuscleGroupe(params.id);
    }

    @Post()
    create(@Body() muscleGroupe: MuscleGroupeEntity) {
        return this.service.createMuscleGroupe(muscleGroupe);
    }

    @Put()
    update(@Body() muscleGroupe: MuscleGroupeEntity) {
        return this.service.updateMuscleGroupe(muscleGroupe);
    }

    @Delete(':id')
    deleteExercice(@Param() params) {
        return this.service.deleteMuscleGroupe(params.id);
    }
}

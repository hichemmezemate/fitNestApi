import { Module } from '@nestjs/common';
import { ExercicesService } from './exercices.service';
import { ExercicesController } from './exercices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciceEntity } from './exercice.entity/exercice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciceEntity])],
  exports: [ExercicesService],
  providers: [ExercicesService],
  controllers: [ExercicesController]
})
export class ExercicesModule {}

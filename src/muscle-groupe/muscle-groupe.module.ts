import { Module } from '@nestjs/common';
import { MuscleGroupeController } from './muscle-groupe.controller';
import { MuscleGroupeService } from './muscle-groupe.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuscleGroupeEntity } from './muscle-groupe.entity/muscle-groupe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MuscleGroupeEntity])],
  controllers: [MuscleGroupeController],
  providers: [MuscleGroupeService],
  exports: [MuscleGroupeService],
})
export class MuscleGroupeModule {}

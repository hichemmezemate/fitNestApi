import { Module } from '@nestjs/common';
import { ProgrammesService } from './programmes.service';
import { ProgrammesController } from './programmes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgrammeEntity } from './programme.entity/programme.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProgrammeEntity])],
  providers: [ProgrammesService],
  controllers: [ProgrammesController],
  exports: [ProgrammesService],
})
export class ProgrammesModule {}

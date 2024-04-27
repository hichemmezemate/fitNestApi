import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { ExercicesModule } from './exercices/exercices.module';
import { ProgrammesModule } from './programmes/programmes.module';
import { MuscleGroupeModule } from './muscle-groupe/muscle-groupe.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "fitnest",
    "entities": ["dist/**/**.entity{.ts,.js}"],
    "synchronize": true}), UsersModule, MuscleGroupeModule,RolesModule, AuthModule, ExercicesModule, ProgrammesModule, MuscleGroupeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { ExerciceEntity } from "src/exercices/exercice.entity/exercice.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MuscleGroupeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    nom_muscle:string;

    @ManyToMany(() => ExerciceEntity, (exercice) => exercice.muscleGroupe,
    {onDelete: 'CASCADE', onUpdate: 'NO ACTION'})
    exercices?: ExerciceEntity[]
}

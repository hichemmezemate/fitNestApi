import { MuscleGroupeEntity } from "src/muscle-groupe/muscle-groupe.entity/muscle-groupe.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ExerciceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    nom_exercice:string;

    @Column({ length: 250 })
    image:string;

    @ManyToMany(() => MuscleGroupeEntity, (muscleGroupe) => muscleGroupe.exercices,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
    @JoinTable({
        name: 'groupe_exercice',
        joinColumn: {
          name: 'exercice.id',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'muscle_groupeid',
          referencedColumnName: 'id',
        },
      })
    muscleGroupe?: MuscleGroupeEntity[]


}

import { ExerciceEntity } from "src/exercices/exercice.entity/exercice.entity";
import { UserEntity } from "src/users/user.entity/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProgrammeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nom_programme: string;

    
    @Column({ length: 250 })
    image: string;


    @ManyToOne(() => UserEntity, (user) => user.programme, {onDelete: 'SET NULL'})
    user: UserEntity

    @ManyToMany(() => ExerciceEntity, (exercices) => exercices.programme, {onDelete: 'CASCADE'})
    exercices: ExerciceEntity[]
}

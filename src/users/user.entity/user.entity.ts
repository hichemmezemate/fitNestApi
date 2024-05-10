import { ExerciceEntity } from "src/exercices/exercice.entity/exercice.entity";
import { ProgrammeEntity } from "src/programmes/programme.entity/programme.entity";
import { RoleEntity } from "src/roles/role.entity/role.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nom: string;

    @Column({ length: 50 })
    prenom: string;

    @Column({ length: 250})
    email: string;

    @Column({ length: 250})
    password: string;

    @Column()
    age: number;

    @Column({nullable: true})
    poids: number;
    
    @OneToMany(() => RoleEntity, (role) => role.users, { onDelete: "SET NULL"})
    @JoinColumn({ name: "role_id" })
    role: RoleEntity;
    

    @OneToMany(() => ProgrammeEntity, (programme) => programme.user, { onDelete: "SET NULL"})
    programme: ProgrammeEntity[]
}

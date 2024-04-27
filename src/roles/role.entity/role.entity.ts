import { UserEntity } from "src/users/user.entity/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nom: string;

    @ManyToOne(() => UserEntity, (user) => user.roles, { onDelete: "CASCADE"})
    users: UserEntity[]
}

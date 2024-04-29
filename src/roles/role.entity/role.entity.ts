import { UserEntity } from "src/users/user.entity/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nom: string;

    @OneToMany(() => UserEntity, (user) => user.role, { onDelete: "SET NULL"})
    users: UserEntity[]
}

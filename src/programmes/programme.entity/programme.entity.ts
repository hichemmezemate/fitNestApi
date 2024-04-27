import { UserEntity } from "src/users/user.entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProgrammeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nom_programme: string;

    @ManyToOne(() => UserEntity, (user) => user.programme)
    user: UserEntity
}

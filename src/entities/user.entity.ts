import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')

export class User extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
}
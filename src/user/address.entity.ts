import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Address{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public street: string;

    @Column()
    public city: string;
}
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public age: number;

    @Column()
    public address: string;
}
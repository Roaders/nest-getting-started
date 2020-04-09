import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Address } from "./address.entity";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public age: number;

    @Column()
    @OneToOne(type => Address)
    public address: Address;
}
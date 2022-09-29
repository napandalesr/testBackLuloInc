import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
    codigo: number;

  @Column("int")
    capacidad: number;

  @Column("text")
    precio: string;

  @Column("text")
    estado: string;
}
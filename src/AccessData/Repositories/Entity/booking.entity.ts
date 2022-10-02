import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./room.entity";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
    id: number;

  @Column("text")
    nombre: string;

  @Column("text")
    fechaIngreso: string;

  @Column("text")
    fechaSalida: string;
}

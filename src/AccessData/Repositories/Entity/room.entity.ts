import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Booking } from "./booking.entity";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
    id?: number;

  @Column("int")
    capacidad: number;

  @Column("text")
    precio: string;

  @Column("text")
    estado: string;

  @ManyToMany(() => Booking)
  @JoinTable({ name: "codigo_booking" })
      codigo: any[];
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Booking } from "./booking.entity";

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

  @OneToMany(type => Booking, booking => booking.codigo) bookings: Booking[];
}
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookingEntity } from "./booking.entity";

@Entity()
export class RoomEntity {
  @PrimaryGeneratedColumn()
    codigo: number;

  @Column()
    capacidad: number;

  @Column()
    precio: string;

  @Column()
    estado: string;

  @OneToMany(type => BookingEntity, booking => booking.codigo) bookings: BookingEntity[];
}
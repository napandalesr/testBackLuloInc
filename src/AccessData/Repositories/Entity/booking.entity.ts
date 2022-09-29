import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./room.entity";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
    id: number;

  @Column("text")
    nombre: string;

  @Column("int")
    codigo: number;

  @ManyToOne(type => Room, room => room.codigo) room: Room;
}
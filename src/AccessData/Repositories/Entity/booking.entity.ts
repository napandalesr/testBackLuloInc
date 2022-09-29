import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RoomEntity } from "./room.entity";

@Entity()
export class BookingEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    nombre: string;

  @Column()
    codigo: number;

  @ManyToOne(type => RoomEntity, room => room.codigo) room: RoomEntity;
}
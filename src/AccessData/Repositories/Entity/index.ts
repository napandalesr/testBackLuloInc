import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BookingEntity {
  @PrimaryGeneratedColumn()
    codigo: number;

  @Column()
    capacidad: string;

  @Column()
    precio: string;

  @Column()
    estado: string;
}
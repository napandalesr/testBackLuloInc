import { AppDataSource } from '../../Config/DB';
import { Room } from './Entity/room.entity';
import { IPortRoomDataAccess } from '../Ports';
import { RoomModel, RoomUpdateModel } from './Model/room.model';
import { BookingRepository } from './booking.repository';
import { Booking } from './Entity/booking.entity';

export class RoomRepository implements IPortRoomDataAccess {
  async create (roomModel: RoomModel): Promise<number> {
    const roomEntity = new Room();
    roomEntity.capacidad = roomModel.capacidad;
    roomEntity.precio = roomModel.precio;
    roomEntity.estado = roomModel.estado;
    try {
      await AppDataSource.manager.save(roomEntity);
    } catch (error) {
      console.log(error);
    }
    return roomEntity.id;
  }

  async get (): Promise<Room[]> {
    const roomRepository = AppDataSource.getRepository(Room);
    return await roomRepository.find();
  }

  async update (roomUpdateModel: RoomUpdateModel): Promise<RoomUpdateModel> {
    const roomToUpdate:Room = await AppDataSource.getRepository(Room).findOneBy({
      id: roomUpdateModel.codigo
    });
    roomToUpdate.estado = roomUpdateModel.estado;

    try {
      await AppDataSource.manager.save(roomToUpdate);
    } catch (error) {
      console.log(error);
    }
    return roomUpdateModel;
  }

  async updateBooking (bookingEntity: Booking, codigo: number): Promise<void> {
    const room = await AppDataSource.getRepository(Room).findOne({
      where: {
        id: codigo
      }
    })
    room.codigo = [bookingEntity]
    await AppDataSource.manager.save(room);
  }

  async findId (codigo: number): Promise<Room> {
    const room = await AppDataSource.getRepository(Room).findOne({
      where: {
        id: codigo
      },
      relations: {
        codigo: true
      }
    });
    console.log("room",room);
    
    
    return room;
  }
}

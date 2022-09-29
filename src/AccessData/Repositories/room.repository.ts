import { AppDataSource } from '../../Config/DB';
import { Room } from './Entity/room.entity';
import { IPortRoomDataAccess } from '../Ports';
import { RoomModel } from './Model/room.model';

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
    return roomEntity.codigo;
  }

  async get(): Promise<Room[]> {
    const roomRepository = AppDataSource.getRepository(Room);
    return await roomRepository.find();
  }

  async update(codigo: number, newState:string): Promise<Room> {
    const roomToUpdate = await AppDataSource.getRepository(Room).findOneBy({
      codigo: codigo,
    });
    roomToUpdate.estado = newState;

    try {
      await AppDataSource.manager.save(roomToUpdate);
    } catch (error) {
      console.log(error);
    }
    return roomToUpdate;
  }
}
import { AppDataSource } from '../../Config/DB';
import { RoomEntity } from './Entity/room.entity';
import { IPortRoomDataAccess } from '../Ports';
import { RoomModel } from './Model/room.model';

export class RoomRepository implements IPortRoomDataAccess {
  async create (roomModel: RoomModel): Promise<number> {
    const roomEntity = new RoomEntity();
    roomEntity.codigo = roomModel.codigo;
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

  async get(): Promise<RoomEntity[]> {
    const roomRepository = AppDataSource.getRepository(RoomEntity);
    return await roomRepository.find();
  }
}
import { AppDataSource } from '../../Config/DB';
import { Room } from './Entity/room.entity';
import { IPortRoomDataAccess } from '../Ports';
import { RoomModel, RoomUdateModel } from './Model/room.model';

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

  async update(roomUdateModel:RoomUdateModel): Promise<RoomUdateModel> {
    
    const roomToUpdate = await AppDataSource.getRepository(Room).findOneBy({
      codigo: roomUdateModel.codigo,
    });
    roomToUpdate.estado = roomUdateModel.estado;
    
    try {
      await AppDataSource.manager.save(roomToUpdate);
    } catch (error) {
      console.log(error);
    }
    return roomToUpdate;
  }
}
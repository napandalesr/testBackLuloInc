import { RoomUpdateDto } from './../Controller/Room/dto/room.update.dto';
import { IPortRoomDataAccess } from '../../AccessData/Ports';
import { RoomDto } from '../Controller/Room/dto/room.dto';

export class RoomAdapter {
  constructor (private readonly roomRepository: IPortRoomDataAccess) {}
  async create (roomDto: RoomDto): Promise<void> {
    return this.roomRepository.create(roomDto);
  }

  async get (): Promise<any> {
    return await this.roomRepository.get();
  }

  async update (roomUpdateDto:RoomUpdateDto): Promise<RoomUpdateDto> {
    const { codigo ,estado} = roomUpdateDto;
    return await this.roomRepository.update({codigo, estado});
  }
}
import { RoomDto } from '../Controller/Room/dto/room.dto';
import { RoomUpdateDto } from '../Controller/Room/dto/room.update.dto';
import { IResponse } from './../../interfaces/Response';

export interface IRoom {
  create: (roomDto: RoomDto) => Promise<IResponse>
  get: () => Promise<RoomDto[]>
  update: (roomUpdateDto:RoomUpdateDto) => Promise<RoomUpdateDto>
}
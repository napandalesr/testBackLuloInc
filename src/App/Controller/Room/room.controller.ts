import { RoomDto } from './dto/room.dto';
import { IResponse } from '../../../interfaces/Response';
import { RoomRepository } from '../../../AccessData/Repositories/room.repository';
import { RoomAdapter } from '../../Adapter';

export class RoomController {
  async create (roomDto: RoomDto): Promise<IResponse>  {
    const validateDto = new RoomDto();
    
    const responseValedateDto = await validateDto.vatidation(roomDto);
    if (responseValedateDto.length > 0) {
      return { status: 400, data: responseValedateDto };
    }
    const roomAdapter = new RoomAdapter(new RoomRepository());
    const codigo = await roomAdapter.create(roomDto);
    return { status: 200, data: { codigo: codigo, ...roomDto } };
  }
}
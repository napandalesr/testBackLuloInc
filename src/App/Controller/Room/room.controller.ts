import { RoomDto } from './dto/room.dto';
import { IResponse } from '../../../interfaces/Response';
import { RoomRepository } from '../../../AccessData/Repositories/room.repository';
import { RoomAdapter } from '../../Adapter';
import { IRoom } from '../../Ports';
import { RoomUpdateDto } from './dto/room.update.dto';

export class RoomController implements IRoom {
  async create (roomDto: RoomDto): Promise<IResponse> {
    const validateDto = new RoomDto();

    const responseValedateDto = await validateDto.vatidation(roomDto);
    if (responseValedateDto.length > 0) {
      return { status: 400, data: responseValedateDto };
    }
    const roomAdapter = new RoomAdapter(new RoomRepository());
    const codigo = await roomAdapter.create(roomDto);
    return { status: 200, data: { codigo, ...roomDto } };
  }

  async get (): Promise<RoomDto[]> {
    const roomAdapter = new RoomAdapter(new RoomRepository());
    return await roomAdapter.get();
  }

  async update (roomUdpdateDto: RoomUpdateDto): Promise<RoomUpdateDto> {
    const roomAdapter = new RoomAdapter(new RoomRepository());
    return await roomAdapter.update(roomUdpdateDto);
  };

  async findId (codigo: number): Promise<RoomDto> {
    const bookingAdapter = new RoomAdapter(new RoomRepository());
    return bookingAdapter.findId(codigo);
  }
}

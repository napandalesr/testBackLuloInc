import { BookingDto } from './dto';
import { IResponse } from './../../../interfaces/Response';
import { BookingRepository } from '../../../AccessData/Repositories/room.repository';
import { BookingAdapter } from '../../Adapter';

export class BookingController {
  async create (bookingDto: BookingDto): Promise<IResponse>  {
    const validateDto = new BookingDto();
    const responseValedateDto = await validateDto.vatidation(bookingDto);
    if (responseValedateDto.length > 0) {
      return { status: 400, data: responseValedateDto };
    }
    const userAdapter = new BookingAdapter(new BookingRepository());
    const codigo = await userAdapter.create(bookingDto);
    return { status: 200, data: { codigo: codigo, ...bookingDto } };
  }
}
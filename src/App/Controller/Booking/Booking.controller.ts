import { BookingDto } from './dto';
import { IResponse } from './../../../interfaces/Response';

export class BookingController {
  async create (bookingDto: BookingDto): Promise<IResponse>  {
    const validateDto = new BookingDto();
    const responseValedateDto = await validateDto.vatidation(bookingDto);
    if (responseValedateDto.length > 0) {
      return { status: 400, data: responseValedateDto };
    }
    return { status: 200, data: { codigo: 1000, ...bookingDto } };
  }
}
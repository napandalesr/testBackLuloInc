import { BookingRepository } from '../../../AccessData/Repositories/booking.repository';
import { IResponse } from '../../../interfaces/Response';
import { BookingAdapter } from '../../Adapter/booking.adapter';
import { IBooking } from '../../Ports';
import { BookingDto } from './dto/booking.dto';

export class BookingController implements IBooking {
  async create (bookingDto: BookingDto): Promise<IResponse> {
    const validateDto = new BookingDto();

    const responseValedateDto = await validateDto.vatidation(bookingDto);
    if (responseValedateDto.length > 0) {
      return { status: 400, data: responseValedateDto };
    }
    const bookingAdapter = new BookingAdapter(new BookingRepository());

    const codigo = await bookingAdapter.create(bookingDto);
    return { status: 200, data: { codigo, ...bookingDto } };
  }
}

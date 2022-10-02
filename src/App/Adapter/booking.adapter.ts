import { IPortBookingDataAccess } from '../../AccessData/Ports';
import { BookingDto } from '../Controller/Booking/dto/booking.dto';

export class BookingAdapter {
  constructor (private readonly bookingRepository: IPortBookingDataAccess) {}
  async create (bookingDto: BookingDto): Promise<void> {
    return this.bookingRepository.create(bookingDto);
  }

}

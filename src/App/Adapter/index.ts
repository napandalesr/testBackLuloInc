import { IPortDataAccess } from '../../AccessData/Ports';
import { BookingDto } from '../Controller/Booking/dto';

export class BookingAdapter {
  constructor (private readonly bookingRepository: IPortDataAccess) {}
  async create (bookingDto: BookingDto): Promise<void> {
    return this.bookingRepository.create(bookingDto);
  }

  async get (): Promise<any> {
    return await this.bookingRepository.get();
  }
}
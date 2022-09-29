import { BookingModel } from './Model/booking.model';
import { AppDataSource } from '../../Config/DB';
import { IPortBookingDataAccess } from '../Ports';
import { Booking } from './Entity/booking.entity';

export class BookingRepository implements IPortBookingDataAccess {
  async create (bookingModel: BookingModel): Promise<number> {
    const bookingEntity = new Booking();
    bookingEntity.codigo = bookingModel.codigo;
    bookingEntity.nombre = bookingModel.nombre;
    try {
      await AppDataSource.manager.save(bookingEntity);
    } catch (error) {
      console.log(error);
    }
    return bookingEntity.codigo;
  }
}
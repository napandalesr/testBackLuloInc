import { BookingModel } from './Model/booking.model';
import { AppDataSource } from '../../Config/DB';
import { IPortBookingDataAccess } from '../Ports';
import { Booking } from './Entity/booking.entity';
import { RoomRepository } from './room.repository';
import { RoomUpdateModel } from './Model/room.model';

export class BookingRepository implements IPortBookingDataAccess {
  async create (bookingModel: BookingModel): Promise<number[]> {
    await bookingModel.codigo.map(async item => {
      const room = new RoomRepository();
      const bookingEntity = new Booking();
      bookingEntity.nombre = bookingModel.nombre;
      bookingEntity.fechaIngreso = bookingModel.fechaIngreso;
      bookingEntity.fechaSalida = bookingModel.fechaSalida;
      
      try {
        await AppDataSource.manager.save(bookingEntity);
      } catch (error) {
        console.log(error);
      }
      await room.updateBooking(bookingEntity, item);
      const roomUpdateModel = new RoomUpdateModel();
      roomUpdateModel.codigo = item;
      roomUpdateModel.estado = "Reservado";
      await room.update(roomUpdateModel);
    });
    return bookingModel.codigo;
  }
}

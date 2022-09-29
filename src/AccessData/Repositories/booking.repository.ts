import { BookingModel } from './Model';
import { AppDataSource } from '../../Config/DB';
import { BookingEntity } from './Entity';
import { IPortDataAccess } from '../Ports';

export class BookingRepository implements IPortDataAccess{
  async create (bookingModel: BookingModel): Promise<number> {
    const bookingEntity = new BookingEntity();
    bookingEntity.capacidad = bookingModel.capacidad;
    bookingEntity.precio = bookingModel.precio;
    bookingEntity.estado = bookingModel.estado;
    try {
      await AppDataSource.manager.save(bookingEntity);
    } catch (error) {
      console.log(error);
    }
    return bookingEntity.codigo;
  }

  async get(): Promise<BookingEntity[]> {
    const bookingRepository = AppDataSource.getRepository(BookingEntity);
    return await bookingRepository.find();
  }
}
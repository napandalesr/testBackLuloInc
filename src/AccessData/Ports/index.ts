import { BookingModel } from '../Repositories/Model/booking.model';
import { RoomModel, RoomUpdateModel } from '../Repositories/Model/room.model';

export interface IPortRoomDataAccess {
  create: (roomModel: RoomModel) => void
  get: () => Promise<RoomModel[]>
  update: (RoomUdateModel) => Promise<RoomUpdateModel>
  findId: (codigo: number)=>  Promise<RoomModel>
}

export interface IPortBookingDataAccess {
  create: (bookingModel: BookingModel) => void
}

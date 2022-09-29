import { BookingModel } from '../Repositories/Model/booking.model';
import { RoomModel, RoomUdateModel } from '../Repositories/Model/room.model';

export interface IPortRoomDataAccess {
  create: (roomModel: RoomModel) => void
  get: () => Promise<RoomModel[]>
  update: (RoomUdateModel) => Promise<RoomUdateModel>
}

export interface IPortBookingDataAccess {
  create: (bookingModel: BookingModel) => void
}
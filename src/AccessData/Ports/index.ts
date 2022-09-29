import { BookingModel } from '../Repositories/Model/booking.model';
import { RoomModel } from '../Repositories/Model/room.model';

export interface IPortRoomDataAccess {
  create: (roomModel: RoomModel) => void
  get: () => Promise<RoomModel[]>
}

export interface IPortBookingDataAccess {
  create: (bookingModel: BookingModel) => void
}
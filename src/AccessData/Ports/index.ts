import { BookingModel } from '../Repositories/Model/booking.model';
import { RoomModel } from '../Repositories/Model/room.model';

export interface IPortRoomDataAccess {
  create: (roomModel: RoomModel) => void
  get: () => Promise<RoomModel[]>
  update: (codigo:number, newState: string) => Promise<RoomModel>
}

export interface IPortBookingDataAccess {
  create: (bookingModel: BookingModel) => void
}
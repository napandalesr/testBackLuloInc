import { BookingModel } from './../Repositories/Model';

export interface IPortDataAccess {
  create: (bookingModel: BookingModel) => void
  get: () => Promise<BookingModel[]>
}
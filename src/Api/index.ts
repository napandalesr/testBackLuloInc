import { RoomController } from './../App/Controller/Room/room.controller';

import * as express from 'express';
import RoomRouter from './Routes/room.router';
import BookingRouter from './Routes/booking.router';
import { BookingController } from '../App/Controller/Booking/booking.controller';

const appRouter = express();

const roomRouter = new RoomRouter(new RoomController()).getRouter();
appRouter.use("/room", roomRouter);

const bookingRouter = new BookingRouter(new BookingController()).getRouter();
appRouter.use("/booking", bookingRouter);

export { appRouter };

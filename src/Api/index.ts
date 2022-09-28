
import * as express from 'express';
import BookingRouter from './Routes/bookings.router';

const appRouter = express();

const bookingRouter = new BookingRouter().getRouter();
appRouter.use("/booking", bookingRouter);

export { appRouter };
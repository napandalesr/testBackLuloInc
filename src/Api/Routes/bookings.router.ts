import { BookingRepository } from '../../AccessData/Repositories/room.repository';
import { Router, Request, Response, NextFunction } from 'express';

export default class BookingRouter {
  private readonly router: Router;

  constructor () {
    this.router = Router();
  }

  createRoutes = {
    get: () => {
      this.router.get("/", async (req: Request, res: Response, next: NextFunction) => {
        const bookingRepository  = new BookingRepository();
    await bookingRepository.create({capacidad: 2,
      precio: "string",
      estado: "string"});
        res.send("getBooking");
        next();
      });
    },
    post: () => {
      this.router.post("/", async (req: Request, res: Response, next: NextFunction) => {
        res.send("postBooking");
        next();
      });
    }
  };

  getRouter (): Router {
    this.createRoutes.get();
    this.createRoutes.post();
    return this.router;
  }
}
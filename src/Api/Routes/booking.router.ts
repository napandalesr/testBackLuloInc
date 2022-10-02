import { Router, Request, Response, NextFunction } from 'express';
import { IBooking } from '../../App/Ports';

export default class BookingRouter {
  private readonly router: Router;

  constructor (private readonly booking: IBooking) {
    this.router = Router();
  }

  createRoutes = {
    post: () => {
      this.router.post("/", async (req: Request, res: Response, next: NextFunction) => {
        const response = await this.booking.create(req.body);
        res.status(response.status).json(response);
        next();
      });
    }
  };

  getRouter (): Router {
    this.createRoutes.post();
    return this.router;
  }
}

import { Router, Request, Response, NextFunction } from 'express';

export default class BookingRouter {
  private readonly router: Router;

  constructor () {
    this.router = Router();
  }

  createRoutes = {
    get: () => {
      this.router.get("/", (req: Request, res: Response, next: NextFunction) => {
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
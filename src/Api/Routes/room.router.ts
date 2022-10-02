import { Router, Request, Response, NextFunction } from 'express';
import { IRoom } from '../../App/Ports';

export default class RoomRouter {
  private readonly router: Router;

  constructor (private readonly room: IRoom) {
    this.router = Router();
  }

  createRoutes = {
    get: () => {
      this.router.get("/", async (req: Request, res: Response, next: NextFunction) => {
        const response = await this.room.get();
        res.json(response);
        next();
      });
    },
    post: () => {
      this.router.post("/", async (req: Request, res: Response, next: NextFunction) => {
        const response = await this.room.create(req.body);
        res.status(response.status).json(response);
        next();
      });
    },
    put: () => {
      this.router.put("/", async (req: Request, res: Response, next: NextFunction) => {
        const response = await this.room.create(req.body);
        res.status(response.status).json(response);
        next();
      });
    },
    postId: ()=> {
      this.router.post("/id", async (req: Request, res: Response, next: NextFunction) => {
        res.json(await this.room.findId(req.body.codigo));
      })
    }
  };

  getRouter (): Router {
    this.createRoutes.get();
    this.createRoutes.post();
    this.createRoutes.put();
    this.createRoutes.postId();
    return this.router;
  }
}

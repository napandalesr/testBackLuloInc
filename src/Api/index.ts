import { RoomController } from './../App/Controller/Room/room.controller';

import * as express from 'express';
import RoomRouter from './Routes/room.router';

const appRouter = express();

const roomRouter = new RoomRouter(new RoomController).getRouter();
appRouter.use("/room", roomRouter);

export { appRouter };
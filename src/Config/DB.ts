import "reflect-metadata";
import { DataSource } from 'typeorm';
import { Room } from '../AccessData/Repositories/Entity/room.entity';
import * as dotenv from "dotenv";
import { Booking } from '../AccessData/Repositories/Entity/booking.entity';

dotenv.config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: parseInt(process.env.PORTDB),
  username: process.env.USERNAMEDB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  entities: [Room, Booking]
});

AppDataSource.initialize()
  .then(() => {
    console.log("Databe connect");
  })
  .catch((error) => console.log(error));

export { AppDataSource };

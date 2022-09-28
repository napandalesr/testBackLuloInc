import "reflect-metadata";
import { DataSource } from 'typeorm';
import * as dotenv from "dotenv";


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
  entities: []
});

AppDataSource.initialize()
  .then(() => {
    console.log("Databe connect");
  })
  .catch((error) => console.log(error));

export { AppDataSource };
import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "./Entities.js";

export const AppDataSource = new DataSource({
  type: "mysql",
  port: "3306",
  host: "localhost",
  username: "root",
  password: "khansahb",
  database: "quiz",
  entities: [User],
  synchronize: false,
});

export const Initialize = AppDataSource.initialize()
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((err) => {
    console.error(err);
  });

export const repository = (entity) => AppDataSource.getRepository(entity);

import "reflect-metadata";
import { DataSource } from "typeorm";
import { User, Course, Time, Catagory } from "./enetity/index";
const AppDataSource = new DataSource({
  type: "mysql",
  host: "47.245.105.51",
  port: 3306,
  username: "root",
  password: "Ab2132208#",
  database: "electricity",
  synchronize: true,
  logging: false,
  entities: [User, Course, Time, Catagory],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;

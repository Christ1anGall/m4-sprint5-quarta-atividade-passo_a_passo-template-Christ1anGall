import "reflect-metadata";

import { DataSource } from "typeorm";

require("dotenv").config();

const host = process.env.NODE_ENV === "dockerdev" ? "postgres" : "localhost";

export const AppDataSource = new DataSource({
  type: "postgres",
  host,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  entities: ["src/entities/**.entity.ts"],
  migrations: ["migrations/**/*.ts"],
});

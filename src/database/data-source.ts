import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "4004",
    database: "code_drops_crud",
    synchronize: false,
    logging: true,

    entities: ["src/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
});
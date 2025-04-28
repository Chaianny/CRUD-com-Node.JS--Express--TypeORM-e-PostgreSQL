import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgre",
    password: "postgre",
    database: "code_drops_crud",
    synchronize: false,
    logging: true,
    entities: ["src/**/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
});

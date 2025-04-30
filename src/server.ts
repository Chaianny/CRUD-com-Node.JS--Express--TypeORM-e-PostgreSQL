import express from "express";
import { Router } from "express";
import  categoryRoutes   from "./services/category.routes"
import { AppDataSource } from "./database/data-source";

const app = express();

app.use(express.json());
app.use("/categories", categoryRoutes );


AppDataSource.initialize()
.then(() => {
  console.log("Data Source has been initialized!");

  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
})
.catch((err) => {
  console.error("Error during Data Source initialization", err);
});

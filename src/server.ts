import "reflect-metadata";
import express from "express";
import "./database"; 
import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
    res.send("Hello World");
});

export { routes };

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Server is running"));

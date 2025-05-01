import { Router, Request, Response } from "express";
import { CategoryController } from "../database/controllers/CategoryController";

const router = Router();

router.post("/", (req: Request, res: Response) => {CategoryController.save(req, res)})

export default router

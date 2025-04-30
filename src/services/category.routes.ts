import { Router } from "express";
import { CategoryController } from "../database/controllers/CategoryController";

const router = Router();

router.post("/", CategoryController.save)

export default router

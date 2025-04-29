import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body;

        const service = new CreateCategoryService();

        const result = await service.save({ name, description });

        if (result instanceof Error) {
            return res.status(400).json({ error: result.message });
        }

        return res.status(201).json(result);
    }
}

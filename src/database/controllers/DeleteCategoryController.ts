import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/DeleteCategoryService";

export class DeleteCategoryController {
  async handle(request: Request<{ id: string }>, response: Response) {
    const { id } = request.params;
    const service = new DeleteCategoryService();

    try {
      await service.execute(id);
      return response.status(204).end();
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

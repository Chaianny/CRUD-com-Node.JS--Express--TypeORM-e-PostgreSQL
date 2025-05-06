import { AppDataSource } from "../database/data-source";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = AppDataSource.getRepository(Category);

    const category = await repo.findOne({ where: { id } });

    if (!category) {
      throw new Error("Category does not exist!");
    }

    await repo.delete(id);
  }
}

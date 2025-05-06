import { Category } from "../entities/Category";
import { AppDataSource } from "../database/data-source";

export class GetAllCategoryService {
  async execute() {
    const repo = AppDataSource.getRepository(Category);
    return await repo.find();
  }
}

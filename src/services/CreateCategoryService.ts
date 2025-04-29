import { Category } from '../entities/Category';
import { AppDataSource } from "../database/data-source";
import { Repository } from "typeorm";

interface CategoryRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {
    async save({ name, description }: CategoryRequest): Promise<Category | Error> {
        const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

        const existingCategory = await categoryRepository.findOne({ where: { name } });

        if (existingCategory) {
            return new Error("Category already exists");
        }

        const category = categoryRepository.create({

        });

        return await categoryRepository.save(category);
    }
}

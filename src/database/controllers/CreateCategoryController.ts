import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/CreateCategoryService"
import { Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { AppDataSource } from "../data-source";

type CategoryRequest = {
    name: string;
    description: string;
};


export class CreateCategoryController {
    async save({ name, description }: CategoryRequest): Promise<Category | Error> {
        const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

        // Verifica se já existe uma categoria com o mesmo nome SELECT * FROM CATEGORIES WHERE NAME = "NAME" LIMIT 1
        const existingCategory = await categoryRepository.findOne({ where: { name } });

        if (existingCategory) {
            return new Error("Category already exists");
        }
        return await categoryRepository.save({
            name,
            description,
        });
    }
    
} 




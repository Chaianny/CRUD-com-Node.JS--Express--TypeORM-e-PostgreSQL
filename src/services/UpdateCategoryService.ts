import { Category } from '../entities/Category';
import { AppDataSource } from "../database/data-source";


type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
};

export class UpdateCategoryService {
    async execute({id, name, description}: CategoryUpdateRequest) {
        const repo = AppDataSource.getRepository(Category);


        const category = await repo.findOne({ where: {id}});

        console.log(category);

        if(!category) {
            return new Error("Category does not exist!")
        }

        category.name = name || category.name;
        category.description = description || category.description;

        await repo.save(category);

        return category;
    }
}
import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/CreateCategoryService"
import { Repository } from "typeorm";
import { Category } from '../../entities/Category';
import { AppDataSource } from "../data-source";

type CategoryRequest = {
    name: string;
    description: string;
};


export class CategoryController {
    static async save(req: Request, res: Response){
        const categoryRepository = AppDataSource.getRepository(Category);

        const category = categoryRepository.create(req.body)
        console.log(category)
        await categoryRepository.save(category)
        return res.json(category)
    }
    
} 




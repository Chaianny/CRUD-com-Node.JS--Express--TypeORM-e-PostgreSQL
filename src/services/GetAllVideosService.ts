import { AppDataSource } from "../database/data-source";
import { Video } from "../entities/Video";
import { getRepository } from "typeorm";

export class GetAllVideosService {
    async execute() {
        const repo = getRepository(Video);

        return await repo.find({
                    relations: ["category"],
                });
    }
}
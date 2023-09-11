import { Category } from "../models/Category";

// DTO => Data Transfer Object
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    index(): Category[];
    create({name, description}: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
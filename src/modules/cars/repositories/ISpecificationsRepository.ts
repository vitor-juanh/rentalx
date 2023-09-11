import { Specification } from "../models/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    index(): Specification[];
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO }
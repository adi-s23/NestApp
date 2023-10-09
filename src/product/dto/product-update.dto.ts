import { IsString, } from "class-validator";
export class ProductUpdateDto {

    name?: string;
    brand?: string;
    cost?: number;
}
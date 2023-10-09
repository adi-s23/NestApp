import { Controller,Get,Post,Patch,Req, Body, Param,Delete } from "@nestjs/common";
import { Request } from "express";
import { CreateProductDto } from "./dto/product-create.dto";
import { ProductService } from "./product.service";
import { Product, ProductCreateData, ProductObj, ProductUpdateData } from "./interfaces/Product";
import { ProductUpdateDto } from "./dto/product-update.dto";

@Controller('products')
export class ProductController{

    constructor(
    private productService: ProductService
    ){

    }
    @Get('/')
    async getAllProducts(): Promise<Product[]>{
        const products: Product[]=await this.productService.allProducts();
        return products;
    }

    @Post('/')
    async createProduct(@Body() createProductDto: CreateProductDto): Promise<string>{
        const payload: ProductCreateData = {
            name: createProductDto.name,
            cost: createProductDto.cost,
            brand: createProductDto.brand,  
        };
       await this.productService.createProduct(payload);
       return "Product created";
       
    }
    @Patch('/:id')
    async updateProduct(@Param('id') id:string,@Body() productUpdateDto: ProductUpdateDto): Promise<string>{
        const payload: ProductUpdateData = {
            name: productUpdateDto.name,
            brand: productUpdateDto.brand,
            cost: productUpdateDto.cost
        }
        await this.productService.updateProduct(id,payload);
        return "Product Updated";
    }
    @Delete('/:id')
    async deleteProduct(@Param('id') id: string): Promise<string>{
        await this.productService.deleteProduct(id);
        return "Product Deleted";
    }
}
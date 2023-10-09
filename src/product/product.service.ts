import { Injectable } from "@nestjs/common";
import { Product, ProductCreateData, ProductObj, ProductUpdateData } from "./interfaces/Product";
@Injectable()
export class ProductService{
    private products: Product[] = [];

    createProduct(product : ProductCreateData): void{
        let id: number;
        if(this.products.length==0){
            id =1
            
        }
        else{
            id= this.products.length+1;
        }
        const newProduct:Product = new ProductObj();
        newProduct.brand=product.brand;
        newProduct.cost=product.cost;
        newProduct.name = product.name;
        newProduct.id = id.toString();
        this.products.push(newProduct);
    }

    allProducts(): Product[]{
        return this.products;
    }

    updateProduct(id: string,updatePayload: ProductUpdateData) : void {

        this.products = this.products.map((product: Product)=>{
            if(product.id == id){
                product.brand = (updatePayload.brand) ? updatePayload.brand : product.brand;
                product.cost = (updatePayload.cost)? updatePayload.cost : product.cost;
                product.name = (updatePayload.name)? updatePayload.name : product.name;
            }
            return product;
        })
        
    }

    deleteProduct(id: string): void{
        this.products = this.products.filter((item : Product) => item.id != id)
    }

    
}
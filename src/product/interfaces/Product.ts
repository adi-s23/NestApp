export interface Product{
    name: string;
    brand: string;
    id: string;
    cost: Number;
}

export class ProductObj{
    name: string;
    brand: string;
    id: string;
    cost: Number;

    getName(): string{
        return this.name;
    }

    getBrand(): string{
        return this.brand;
    }

    getId(): string{
        return this.id;
    }
    getCost(): Number {
        return this.cost;
    }

    setName(name: string): void{
         this.name=name;
    }

    setBrand(brand: string): void{
        this.brand=brand;
    }

    setId(id: string):void{
         this.id=id;
    }
    setCost(cost: Number): void {
        this.cost=cost;
    }
    
}

export class ProductCreateData{
    name: string;
    brand: string;
    cost: Number;
}

export class ProductUpdateData{
    name?: string;
    brand?: string;
    cost?: Number 
}
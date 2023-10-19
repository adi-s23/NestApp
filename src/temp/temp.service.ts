import { Injectable } from "@nestjs/common";
import { TempRepository } from "./temp.repository";

@Injectable()
export class TempService{
    constructor(private tempRepository: TempRepository){

    }

    createinBatch(){

    }

    async createAll(){
        let start = performance.now()
        let temps=[]
        for(let i=0;i<1000;i++){
           let roll = Math.floor(Math.random() * (10000000)+1);
           let name  = Math.random().toString(36).substring(2,7);
           let age = Math.floor((Math.random() * (100) +1));
            temps.push({name: name,roll: roll,age: age})
        }
        await this.tempRepository.createBulk(temps);
        let time = performance.now() - start;
        console.log(time)
    }
}
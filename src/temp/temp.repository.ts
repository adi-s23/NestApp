import { Inject, Injectable } from "@nestjs/common";
import { dBType } from "src/core/database/databaseTypes";

@Injectable()
export class TempRepository{
    constructor(
        @Inject("SEQUELIZE") private db: dBType){
    }

    async create(roll: number,name: string,age: number){
       await this.db.Temp.create({name: name,roll: roll, age: age})
    }

    async createBulk(temps){
        await this.db.Temp.bulkCreate(temps);
     }
}
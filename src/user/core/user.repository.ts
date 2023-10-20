import { Inject, Injectable } from "@nestjs/common";
import e from "express";
import { dBType } from "src/core/database/databaseTypes";

@Injectable()
export class UserRepository{
    constructor( @Inject("SEQUELIZE") private db: dBType){

    }

    async findUserByEmail(email: string){
        try {
         return await this.db.User.findOne({where: {
            email: email
         }});
        } catch (error) {
            throw error;
        }
    }

    async createUser(email: string, password: string){
        try {
           await this.db.User.create({
                email: email,
                password: password
            });
        } catch (error) {
            throw error;
        }
    }

    async updateSession(id:bigint,token: bigint){
        try {
            await this.db.User.update({sessionId: token},{where:{
                id: id
            }});
        } catch (error) {
            throw error;
        }
    }

    async getAll(){
        try {
            return await this.db.User.findAll({attributes: {exclude: ['password','sessionId']}});
        } catch (error) {
            throw error;
        }
    }



    
}
import { Sequelize } from "sequelize-typescript";
import { Temp } from "src/temp/temp.entity";
import { User } from "src/user/model/user.entity";
let sequelize;

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      sequelize = new Sequelize({username: "postgres",password: "Aditya@123",port:5432,database: "template1",dialect: "postgres",host: "localhost"});
      sequelize.addModels([
        Temp,
        User
      ]);
      await sequelize.sync({});
      return sequelize.models;
    },
  },
  {
    provide: "SQLIZE",
    useFactory: async() =>{
      return sequelize;
    }
  }
];
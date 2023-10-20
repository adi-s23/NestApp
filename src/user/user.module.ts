import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/core/database/database.module";
import { UserService } from "./core/user.service";
import { UserRepository } from "./core/user.repository";
import { UserController } from "./core/user.controller";
import { RedisModule } from "src/core/redis/redis.module";

@Module({
    imports: [DataBaseModule,RedisModule],
    providers: [UserService,UserRepository],
    controllers: [UserController],
    exports: []
})
export class UserModule{

}
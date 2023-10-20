import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { UserRepository } from "./user.repository";
import { PassThrough } from "stream";
import { User } from "../model/user.entity";
import { Redis } from "ioredis";
import { RedisService } from "src/core/redis/redis.service";
import { REDIS_CACHE } from "src/core/constants";
@Injectable()
export class UserService {
    constructor(@Inject(REDIS_CACHE) private cacheService: RedisService,
        private userRepository: UserRepository) {

    }

    async getAllUsers(){
       return await this.userRepository.getAll();
    }


    async createUser(email: string, password: string) {
        await this.userRepository.createUser(email, password);
    }

    async loginUser(email: string, password: string) {
        try {
            const user: User = await this.userRepository.findUserByEmail(email);
            if (!user) {
                throw new HttpException({ error: "User doesn't exsist" }, HttpStatus.BAD_REQUEST);
            }

            if (user.password != password) {
                let attempt = await this.cacheService.get(email);
                if (attempt == null ) {
                    await this.cacheService.set(email,1)
                } else {
                    let attempt = await this.cacheService.get(email);
                    await this.cacheService.expire(email,120);
                    if (Number(attempt) == 3) {
                        throw new HttpException({ error: "Please try after 2 minutes account is blocked" }, HttpStatus.BAD_REQUEST);
                    }                    
                    await this.cacheService.incr(email);
                }
                return new HttpException({ error: "Incorrect password" }, HttpStatus.BAD_REQUEST);
            }

            if (user.sessionId) await this.cacheService.del(user.sessionId.toString());

            const token: bigint = BigInt(Math.floor(Math.random() * 1000000000));
            await this.userRepository.updateSession(user.id, token);
            await this.cacheService.hset(token.toString(),user);
            await this.cacheService.expire(token.toString(),180);
            return { token: token.toString() };
        } catch (err) {
            throw err;
        }


    }





}
import { Injectable, Module } from "@nestjs/common";
import { REDIS_CACHE } from "../constants";
import { createClient } from "redis";
import { RedisService } from "./redis.service";


export const redisProviders = [
    {
        provide: REDIS_CACHE,
        useFactory: async () => {
            const redis  = new  RedisService();
            await redis.buildConnection();
            return redis;

        }
    }
]

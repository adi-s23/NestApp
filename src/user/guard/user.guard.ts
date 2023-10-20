
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Redis } from 'ioredis';
import { Observable } from 'rxjs';
import { REDIS_CACHE } from 'src/core/constants';
import { RedisService } from 'src/core/redis/redis.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(@Inject(REDIS_CACHE) private cacheService: RedisService){

  }
   async canActivate(
    context: ExecutionContext,
  ) {
    
    const req = context.switchToHttp().getRequest();
    if(!req.headers.authorization || req.headers.authorization.split(' ')[0] != 'Bearer'){
        return false;
    }
    const token: string =req.headers.authorization.split(' ')[1];

    if(! await this.cacheService.get(token)){
        console.log(await this.cacheService.get(token))
        return false;
    }
    else{
        req.user = await this.cacheService.get(token);
    }
    return true;
  }
}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { DataBaseModule } from './core/database/database.module';
import { TempModule } from './temp/temp.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { UserModule } from './user/user.module';
import { RedisModule } from './core/redis/redis.module';

@Module({
  imports: [ProductModule,DataBaseModule,TempModule, UserModule,RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { DataBaseModule } from './core/database/database.module';
import { TempModule } from './temp/temp.module';

@Module({
  imports: [ProductModule,DataBaseModule,TempModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

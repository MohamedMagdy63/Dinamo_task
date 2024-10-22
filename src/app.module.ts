import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ProductModule } from './products/products.module';
import { CategoryModule } from './categories/categories.module';
import { VendorModule } from './vendors/vendors.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://root:root@cluster0.3pu2k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    ),
    UsersModule,
    ProductModule,
    CategoryModule,
    VendorModule,
    CartsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

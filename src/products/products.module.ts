import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "src/schemas/product.schema";
import { ProductService } from "./products.service";
import { ProductController } from "./products.controller";

@Module({
    imports:[MongooseModule.forFeature([
        {
            name: Product.name,
            schema:ProductSchema
        }
    ])],
    providers:[ProductService],
    controllers:[ProductController]
})
export class ProductModule{}
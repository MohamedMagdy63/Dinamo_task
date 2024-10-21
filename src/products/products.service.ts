import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "src/schemas/product.schema";
import { CreateProductDto } from "./dto/createProductDto";

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>){}
    
    async addProduct(createProductDto: CreateProductDto){
        const newProduct = new this.productModel({
            ...createProductDto,
            added_at:new Date()
        })
        return newProduct.save()
    }

    async getProducts(){
        return this.productModel.find()
    }
}
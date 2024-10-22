import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cart } from "src/schemas/carts.schema";
import { CreateCartDto } from "./dto/createCarts.dto";

@Injectable()
export class CartServices{
    constructor(@InjectModel(Cart.name) private cartModal: Model<Cart>) {}
    
    async addInCart(createCartDto: CreateCartDto){
        const newProduct = new this.cartModal({
            ...createCartDto,
        })
        return newProduct.save()
    }

    async getProductsFromCards(){
        return this.cartModal.find()
    }
}
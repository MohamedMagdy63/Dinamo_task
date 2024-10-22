import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CartItem } from "src/schemas/cartItem.schema";
import { AddCartItemDto } from "./dto/add.cartItems.dto";

@Injectable()
export class CartItemsService {
    constructor(@InjectModel(CartItem.name) private cartItemModel: Model<CartItem>){}
    
    async addItem(addCartItemDto: AddCartItemDto){
        const newItem = new this.cartItemModel({
            ...addCartItemDto,
        })
        return newItem.save()
    }

    async getItems(){
        return this.cartItemModel.find()
    }
}
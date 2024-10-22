import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartItem, CartItemSchema } from "src/schemas/cartItem.schema";
import { CartItemsService } from "./cartItems.services";
import { CartItemsController } from "./cartItems.controllers";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: CartItem.name,
                schema: CartItemSchema,
            }
        ])
    ],
    providers: [CartItemsService],
    controllers:[CartItemsController]
})
export class CartItemsModule {}
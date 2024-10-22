import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartItem } from "src/schemas/cartItem.schema";
import { Cart, CartSchema } from "src/schemas/carts.schema";
import { CartServices } from "./carts.service";
import { CartController } from "./carts.controller";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: Cart.name,
                schema: CartSchema,
            }
        ])
    ],
    providers: [CartServices],
    controllers:[CartController]
})
export class CartsModule {}
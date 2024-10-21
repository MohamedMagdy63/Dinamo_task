import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { User } from "./user.schema";
import { CartItem, CartItemSchema } from "./cartItem.schema";

@Schema({ timestamps: true })
export class Cart extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId | User;

  @Prop({ type: [CartItemSchema] })
  items: CartItem[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);
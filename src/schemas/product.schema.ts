import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Category } from "./category.schema";
import { Vendor } from "./vendor.schema";

@Schema({ timestamps: true })
export class Product extends Document{
    @Prop({required:true , unique:true})
    product : string ;

    @Prop({required:true})
    description : string;
   
    @Prop({required:true})
    stock : number;
    
    @Prop({ required: true })
    price: number;

    @Prop({ default: Date.now })
    added_at : Date;

    @Prop({ type: Types.ObjectId, ref: 'Category' ,required:true })
    category: Category;

    @Prop({ type: Types.ObjectId, ref: 'Vendor', required: true })
    vendor: Types.ObjectId | Vendor;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

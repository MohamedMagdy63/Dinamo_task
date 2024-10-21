import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Vendor } from "src/schemas/vendor.schema";
import { CreateVendorDto } from "./dto/create.vendor";

@Injectable()
export class VendorService{
    constructor(@InjectModel(Vendor.name) private  vendorModel: Model<Vendor>){}
    async addVendor(createVendorDto:CreateVendorDto){
        const newProduct = new this.vendorModel({
            ...createVendorDto,
            createdAt:new Date(),
            updatedAt:new Date()
        })
        return newProduct.save()
    }

    async getVendor(){}

}
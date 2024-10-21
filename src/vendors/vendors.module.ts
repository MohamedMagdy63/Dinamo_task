import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Vendor, VendorSchema } from "src/schemas/vendor.schema";
import { VendorService } from "./vendors.service";
import { VendorController } from "./vendors.controller";

@Module({
    imports:[MongooseModule.forFeature([
        {
            name: Vendor.name,
            schema:VendorSchema
        }
    ])],
    providers:[VendorService],
    controllers:[VendorController]
})
export class VendorModule {}
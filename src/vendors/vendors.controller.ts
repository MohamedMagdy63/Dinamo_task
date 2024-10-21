import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { VendorService } from "./vendors.service";
import { CreateVendorDto } from "./dto/create.vendor";

@Controller('vendors')
export class VendorController{
    constructor(private vendorService: VendorService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async createProduct(@Body() createVendorDto: CreateVendorDto) {
        return this.vendorService.addVendor(createVendorDto);
    }

    @Get()
    getVendors(){
        return this.vendorService.getVendor()
    }
}
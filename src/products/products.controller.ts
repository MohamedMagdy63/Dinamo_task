import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./products.service";
import { CreateProductDto } from "./dto/createProductDto";

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async createProduct(@Body() createProductDto: CreateProductDto) {
        return this.productService.addProduct(createProductDto);
    }

    @Get()
    getProducts(){
        return this.productService.getProducts()
    }
}
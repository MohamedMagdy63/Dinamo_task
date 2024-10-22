import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CartServices } from "./carts.service";
import { CreateCartDto } from "./dto/createCarts.dto";

@Controller('carts')
export class CartController {
    constructor(private cartService: CartServices) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async addInCart(@Body() createCartDto: CreateCartDto) {
        return this.cartService.addInCart(createCartDto);
    }

    @Get()
    getProductsFromCards(){
        return this.cartService.getProductsFromCards()
    }
}
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AddCartItemDto } from "./dto/add.cartItems.dto";
import { CartItemsService } from "./cartItems.services";

@Controller('cartItems')
export class CartItemsController {
    constructor(private cartItemService: CartItemsService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async addItem(@Body() createProductDto: AddCartItemDto) {
        return this.cartItemService.addItem(createProductDto);
    }

    @Get()
    async getItems(){
        return this.cartItemService.getItems()
    }
}
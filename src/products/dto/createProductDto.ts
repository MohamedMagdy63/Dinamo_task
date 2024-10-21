import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto{
    @IsNotEmpty()
    @IsString()
    product : string ;

    @IsNotEmpty()
    @IsString()
    description : string;
   
    @IsNumber()
    @IsNotEmpty()
    stock : number;

    @IsNumber()
    @IsNotEmpty()
    price: number;
}
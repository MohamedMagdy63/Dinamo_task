import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateVendorDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    phone: string; 
}
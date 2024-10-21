import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/createUser.dto";

@Controller('users')

export class UserController {
    constructor(private userService:UserService){}
    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto:CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

    @Get()
    getUsers() {
        return this.userService.getUsers()
    }    
}
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
import { CreateUserDto } from "./dto/createUser.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    
    async createUser(createUserDto: CreateUserDto) {
        const hashedPassword = await this.hashPassword(createUserDto.password);
        
        const newUser = new this.userModel({
            ...createUserDto,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return newUser.save();
    }

    private async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }

    async validateUser(email: string, password: string): Promise<boolean> {
        const user = await this.userModel.findOne({ email }).exec();

        if (user) {
            return this.comparePasswords(password, user.password);
        }

        return false;
    }

    private async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

    getUsers(){
        return this.userModel.find()
    }
}
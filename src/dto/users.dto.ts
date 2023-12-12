import { IsEmail, IsNotEmpty } from "class-validator";

// untuk insert dan update
export class UsersDto{
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}
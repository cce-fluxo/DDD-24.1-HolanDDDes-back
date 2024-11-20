/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthResetDto {
    @ApiProperty({
        description: "Email do usuário",
        example:"mario@gmail.com",
    })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
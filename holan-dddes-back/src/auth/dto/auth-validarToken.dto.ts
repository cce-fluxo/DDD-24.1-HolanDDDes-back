/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthValidarTokenDto {
  @ApiProperty({
    description: "Token do usuário",
    example:"1233sm",
})
  @IsString()
  @IsNotEmpty()
  token: string;

  @ApiProperty({
    description: "Email do usuário",
    example:"mario@gmail.com",
  }) 
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, IsBoolean } from "class-validator";

export class CreateUsuarioDto {
  
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  sobrenome: string;

  @IsNotEmpty()
  @IsString()
  hash_senha: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  telefone?: string;

  dataNascimento?: Date;

  @IsBoolean()
  vip: boolean;
}

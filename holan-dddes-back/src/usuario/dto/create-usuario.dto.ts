/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, IsBoolean, IsOptional } from "class-validator";

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

  // se botarmos o identificador
  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  dataNascimento?: Date;

  @IsBoolean()
  @IsOptional()
  vip: boolean;

  @IsNotEmpty()
  @IsString()
  role: string;
}

/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, IsBoolean, IsOptional, IsDateString } from "class-validator";

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
  @IsDateString()
  data_nascimento?: Date;

  @IsBoolean()
  @IsOptional()
  vip: boolean;

  @IsNotEmpty()
  @IsString()
  role: string;

  @IsOptional()
  @IsString()
  token_resetar_senha: string;
}

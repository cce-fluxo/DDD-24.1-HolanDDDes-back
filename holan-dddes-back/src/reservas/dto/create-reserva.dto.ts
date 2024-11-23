/* eslint-disable prettier/prettier */
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateReservaDto {
  @IsNotEmpty()
  @IsDateString()
  data_check_in: Date;

  @IsNotEmpty()
  @IsDateString()
  data_check_out: Date;

  @IsNotEmpty()
  @IsNumber()
  quantidade_pessoas: number;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsBoolean()
  aceita_pet: boolean;

  @IsNotEmpty()
  @IsNumber()
  clienteId: number;

  @IsNotEmpty()
  @IsNumber()
  acomodacaoId: number;

  @IsOptional()
  @IsNumber()
  cupomId?: number;
}

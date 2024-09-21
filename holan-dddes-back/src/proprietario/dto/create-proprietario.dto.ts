import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProprietarioDto {
  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;

  @IsOptional()
  @IsNumber()
  tempoHospedagem?: number;

  @IsOptional()
  @IsString()
  avaliacao?: string;

  @IsString()
  @IsOptional()
  sobre?: string;
}

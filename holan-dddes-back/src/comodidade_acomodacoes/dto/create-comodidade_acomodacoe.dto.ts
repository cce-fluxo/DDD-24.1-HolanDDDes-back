import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsPhoneNumber, IsBoolean } from "class-validator";

export class CreateComodidadeAcomodacoeDto {
  @ApiProperty({
    description: 'Nome da comodidade',
    example: "Ar-condicionado",
  })
  @IsString()
  @IsNotEmpty()
  nome: string;
}

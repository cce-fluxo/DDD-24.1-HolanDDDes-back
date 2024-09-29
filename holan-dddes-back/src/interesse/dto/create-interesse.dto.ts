import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateInteresseDto {
  @ApiProperty({
    description: "Nome do interesse",
    example: "Voley"
  })
  @IsString()
  @IsNotEmpty()
  Nome: string;
}

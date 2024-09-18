import { ApiProperty } from "@nestjs/swagger";

export class CreateInteresseDto {
  @ApiProperty({
    description: "Nome do interesse",
    example: "Voley"
  })
  Nome: string;
}

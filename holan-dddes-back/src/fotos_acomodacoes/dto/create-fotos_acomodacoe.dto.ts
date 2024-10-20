import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber} from "class-validator";

export class CreateFotosAcomodacaoDto {
  @ApiProperty({
    description: 'Url da foto',
    example: "fytwvwriurvbouyh",
  })
  @IsString()
  @IsNotEmpty()
  url_foto: string;

  @ApiProperty({
    description: 'Conexão entre a foto e a acomodação pelo ID da acomodação',
    example: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  acomodacaoId: number;
}

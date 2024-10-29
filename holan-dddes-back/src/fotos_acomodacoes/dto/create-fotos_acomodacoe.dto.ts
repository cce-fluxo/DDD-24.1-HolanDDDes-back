/* eslint-disable prettier/prettier */
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

  @ApiProperty({
    description: "ID único da foto no Cloudinary",
    example:"123456789",
  })
  @IsNotEmpty()
  @IsNumber()
  cloudinary_id: number;

}

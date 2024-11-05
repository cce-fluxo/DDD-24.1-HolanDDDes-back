/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAcomodacoeDto {
  @ApiProperty({
    description: 'Titulo da acomodação',
    example: 'Quarto 5 estrelas',
  })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({
    description: 'Descrição da comodidade',
    example: 'Quarto bom',
  })
  @IsString()
  @IsOptional()
  descricao?: string;

  @ApiProperty({
    description: 'Número de banheiros',
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  banheiros: number;

  @ApiProperty({
    description: 'Número de quartos',
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  quartos: number;

  @ApiProperty({
    description: 'Número de camas',
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  camas: number;

  @ApiProperty({
    description: 'Valor da diária do quarto',
    example: 200,
  })
  @IsNotEmpty()
  @IsNumber()
  valor_diaria: number;

  @ApiProperty({
    description: 'Valor da diaria com pet',
    example: 50,
  })
  @IsNotEmpty()
  @IsNumber()
  valor_pet: number;

  @ApiProperty({
    description: 'Complementação do quarto',
    example: "Quarto com vista para o mar",
  })
  @IsNotEmpty()
  @IsString()
  complemento: string;

  @ApiProperty({
    description: 'Id do tipo de acomodação',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  tipo_acomodacaoId: number;

  @ApiProperty({
    description: 'Id do hotel',
    example: 1,
  })
  @IsOptional()
  hotelId: number;
}

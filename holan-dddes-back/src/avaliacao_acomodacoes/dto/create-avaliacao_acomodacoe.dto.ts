import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsPhoneNumber, IsBoolean } from "class-validator";

export class CreateAvaliacaoAcomodacoeDto {
  @ApiProperty({
    description: 'Nota para o custo benefício 1-5',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  custo_beneficio: number;

  @ApiProperty({
    description: 'Nota para o atendimento 1-5',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  atendimento: number;

  @ApiProperty({
    description: 'Nota para a comida 1-5',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  comida: number;

  @ApiProperty({
    description: 'Nota para a limpeza 1-5',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()

  @ApiProperty({
    description: 'Nota para a limpeza 1-5',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  limpeza: number;

  @ApiProperty({
    description: 'Nota para o conforto 1-5',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  conforto: number;

  @ApiProperty({
    description: 'Nota para a localização 1-5',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  localizacao: number;

  @ApiProperty({
    description: 'Comentário sobre a acomodação',
    example: "gostei, muito legal",
  })
  @IsString()
  @IsOptional()
  comentario?: string;

  @ApiProperty({
    description: 'Conexão entre a avaliação e a acomodação pelo ID da acomodação',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  acomodacaoId: number;

  @ApiProperty({
    description: 'Conexão entre a avaliação e o cliente que a fez pelo ID do cliente',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  clienteId: number;
}

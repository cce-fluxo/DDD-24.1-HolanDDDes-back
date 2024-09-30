import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAvaliacaoDto {
  @ApiProperty({
    description: 'Nota de custo benefício',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  custo_beneficio: number;

  @ApiProperty({
    description: 'Nota de atendimento',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  atendimento: number;

  @ApiProperty({
    description: 'Nota de comida',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  comida: number;

  @ApiProperty({
    description: 'Nota de limpeza',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  limpeza: number;

  @ApiProperty({
    description: 'Nota de conforto',
    example: 5,
  })
  @IsNotEmpty()
  @IsNumber()
  conforto: number;

  @ApiProperty({
    description: 'Nota de localização',
    example: 5,
  })
  @IsNotEmpty()
  @IsNumber()
  localizacao: number;

  @ApiProperty({
    description: 'Nota de serviços',
    example: 5,
  })
  @IsOptional()
  @IsString()
  comentario?: string;

  @ApiProperty({
    description: 'Conexão da avaliação ao hotel',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  hotelId: number;

  @ApiProperty({
    description: 'Conexão da avaliação ao cliente',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  clientId: number;
}

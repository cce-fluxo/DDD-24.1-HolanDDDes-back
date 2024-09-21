import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateEnderecoDto {
  @ApiProperty({
    description: 'Número do endereço',
    example: 123,
  })
  @IsNumber()
  @IsOptional()
  numero?: number;

  @ApiProperty({
    description: 'Nome da rua',
    example: 'Rua dos Bobos',
  })
  @IsString()
  @IsNotEmpty()
  rua: string;

  @ApiProperty({
    description: 'Nome do bairro',
    example: 'Bairro dos Bobos',
  })
  @IsString()
  @IsNotEmpty()
  bairro: string;

  @ApiProperty({
    description: 'Nome da cidade',
    example: 'Cidade dos Bobos',
  })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({
    description: 'Nome do estado',
    example: 'Estado dos Bobos',
  })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({
    description: 'Nome do país',
    example: 'País dos Bobos',
  })
  @IsString()
  @IsNotEmpty()
  pais: string;
}

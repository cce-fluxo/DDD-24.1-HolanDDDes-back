import { ApiProperty } from '@nestjs/swagger';

export class CreateEnderecoDto {
  @ApiProperty({
    description: 'Número do endereço',
    example: 123,
  })
  numero?: number;

  @ApiProperty({
    description: 'Nome da rua',
    example: 'Rua dos Bobos',
  })
  rua: string;

  @ApiProperty({
    description: 'Nome do bairro',
    example: 'Bairro dos Bobos',
  })
  bairro: string;

  @ApiProperty({
    description: 'Nome da cidade',
    example: 'Cidade dos Bobos',
  })
  cidade: string;

  @ApiProperty({
    description: 'Nome do estado',
    example: 'Estado dos Bobos',
  })
  estado: string;

  @ApiProperty({
    description: 'Nome do país',
    example: 'País dos Bobos',
  })
  pais: string;
}

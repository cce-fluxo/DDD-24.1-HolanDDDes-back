import { ApiProperty } from '@nestjs/swagger';

export class CreateAvaliacaoDto {
  @ApiProperty({
    description: 'Nota de custo benefício',
    example: 5,
  })
  custo_beneficio: number;

  @ApiProperty({
    description: 'Nota de atendimento',
    example: 5,
  })
  atendimento: number;

  @ApiProperty({
    description: 'Nota de comida',
    example: 5,
  })
  comida: number;

  @ApiProperty({
    description: 'Nota de limpeza',
    example: 5,
  })
  limpeza: number;

  @ApiProperty({
    description: 'Nota de conforto',
    example: 5,
  })
  conforto: number;

  @ApiProperty({
    description: 'Nota de localização',
    example: 5,
  })
  localizacao: number;

  @ApiProperty({
    description: 'Nota de serviços',
    example: 5,
  })
  comentario?: string;

  @ApiProperty({
    description: 'Conexão da avaliação ao hotel',
    example: 1,
  })
  hotelId: number;

  @ApiProperty({
    description: 'Conexão da avaliação ao cliente',
    example: 1,
  })
  clientId: number;
}

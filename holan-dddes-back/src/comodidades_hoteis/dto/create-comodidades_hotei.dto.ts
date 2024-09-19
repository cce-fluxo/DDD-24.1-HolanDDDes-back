import { ApiProperty } from '@nestjs/swagger';

export class CreateComodidadesHotelDto {
  @ApiProperty({
    description: 'Nome da comodidade',
    example: 'Piscina',
  })
  nome: string;
}

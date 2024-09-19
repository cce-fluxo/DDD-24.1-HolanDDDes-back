import { ApiProperty } from '@nestjs/swagger';

export class CreateComodidadeNoHotelDto {
  @ApiProperty({
    description: 'ID do hotel',
    example: 1,
  })
  hotelId: number;

  @ApiProperty({
    description: 'ID da comodidade',
    example: 1,
  })
  comodidadeId: number;
}

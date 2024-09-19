import { ApiProperty } from '@nestjs/swagger';

export class CreatefotosHotelDto {
  @ApiProperty({
    description: 'URL da foto do hotel',
    example: "https://www.google.com.br",
  })
  url_foto: string;

  @ApiProperty({
    description: 'Conexão da foto ao hotel',
    example: 1,
  })
  hotelId: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

export class CreatefotosHotelDto {
  @ApiProperty({
    description: 'URL da foto do hotel',
    example: "https://www.google.com.br",
  })
  @IsUrl()
  @IsNotEmpty()
  url_foto: string;

  @ApiProperty({
    description: 'Conexão da foto ao hotel',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  hotelId: number;
}

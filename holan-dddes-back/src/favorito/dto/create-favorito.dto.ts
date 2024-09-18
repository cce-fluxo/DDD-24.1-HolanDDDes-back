import { ApiProperty } from "@nestjs/swagger";

export class CreateFavoritoDto {
  @ApiProperty({
    description:"ID único do cliente",
    example:"123456789",
  })
  clienteId: number;

  @ApiProperty({
    description:"ID único do hotel",
    example:"987654321",
  })
  hotelId: number;
}

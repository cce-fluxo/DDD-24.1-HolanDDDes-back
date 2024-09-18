import { ApiProperty } from "@nestjs/swagger";

export class CreateAssociacaoCupomHotelDto {
    @ApiProperty({
        description:"ID único do hotel",
        example:"123456789",
    })
    hotelId: number;

    @ApiProperty({
        description:"ID único do cupom",
        example:"987654321",
    })
    cupomId: number;
}

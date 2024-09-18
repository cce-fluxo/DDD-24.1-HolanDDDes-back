import { ApiProperty } from "@nestjs/swagger";

export class CreateAssociacaoCupomClienteDto {
    @ApiProperty({
        description:"ID único do cliente",
        example:"123456789",
    })
    clienteId: number;

    @ApiProperty({
        description:"ID único do cupom",
        example:"987654321",
    })
    cupomId: number;
}

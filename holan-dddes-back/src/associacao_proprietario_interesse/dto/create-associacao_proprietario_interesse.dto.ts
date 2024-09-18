import { ApiProperty } from "@nestjs/swagger";

export class CreateAssociacaoProprietarioInteresseDto {
    @ApiProperty({
        description:"ID único do proprietário",
        example:"123456789",
    })
    proprietarioId: number;

    @ApiProperty({
        description:"ID único do interesse",
        example:"987654321",
    })
    interesseId: number;
}

import { ApiProperty } from "@nestjs/swagger";

export class CreateCupomDto {
  @ApiProperty({
    description:"Titulo do cupom",
    example:"Cupom de 10%",
  })
  titulo: string;

  @ApiProperty({
    description:"Status se o cupom pode ou não ser utilizado no momento",
    example:"true",
  })
  Status: boolean;

  @ApiProperty({
    description:"Código do cupom",
    example:"ACBD-XYZ",
  })
  codigo: string;

  @ApiProperty({
    description:"Quantidade de desconto que o cupom oferece",
    example:"10",
  })
  desconto: number;

  @ApiProperty({
    description:"Data de validade do cupom",
    example:"2024-01-01T00:00:00Z",
  })
  data_validade: Date;

  @ApiProperty({
    description:"Descrição do cupom",
    example:"Cupom válido para primeira hospedagem em novos hoteis!",
  })
  descricao: string;
}

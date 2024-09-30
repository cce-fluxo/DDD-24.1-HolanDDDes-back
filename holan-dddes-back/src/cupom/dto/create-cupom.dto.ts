import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCupomDto {
  @ApiProperty({
    description:"Titulo do cupom",
    example:"Cupom de 10%",
  })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({
    description:"Status se o cupom pode ou não ser utilizado no momento",
    example:"true",
  })
  @IsNotEmpty()
  @IsBoolean()
  Status: boolean;

  @ApiProperty({
    description:"Código do cupom",
    example:"ACBD-XYZ",
  })
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @ApiProperty({
    description:"Quantidade de desconto que o cupom oferece",
    example:"10",
  })
  @IsNumber()
  @IsNotEmpty()
  desconto: number;

  @ApiProperty({
    description:"Data de validade do cupom",
    example:"2024-01-01T00:00:00Z",
  })
  @IsNotEmpty()
  @IsDate()
  data_validade: Date;

  @ApiProperty({
    description:"Descrição do cupom",
    example:"Cupom válido para primeira hospedagem em novos hoteis!",
  })
  @IsNotEmpty()
  @IsString()
  descricao: string;
}

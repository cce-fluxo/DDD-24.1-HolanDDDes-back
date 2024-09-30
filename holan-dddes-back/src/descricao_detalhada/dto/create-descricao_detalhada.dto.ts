import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDescricaoDetalhadaDto {
  @ApiProperty({
    description: 'Descrição do hotel',
    example: 'Hotel muito bom',
  })
  @IsString()
  @IsOptional()
  sobre?: string;

  @ApiProperty({
    description: 'Informações sobre os banheiros do hotel',
    example: "Banheiros com chuveiro elétrico, hidromassagem e pia de mármore",
  })
  @IsString()
  @IsOptional()
  banheiro?: string;

  @ApiProperty({
    description: 'Informações sobre os quartos do hotel',
    example: "Quartos com vista para o mar, camas de dossel alto e ar condicionado",
  })
  @IsString()
  @IsOptional()
  quarto?: string;

  @ApiProperty({
    description: 'Informações sobre a área de lazer e a região que o hotel está',
    example: "Piscina, sauna, academia e localizado na região dos lagos",
  })
  @IsString()
  @IsOptional()
  regiao?: string;

  @ApiProperty({
    description: 'Conexão da descrição detalhada ao hotel',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  hotelId: number;
}

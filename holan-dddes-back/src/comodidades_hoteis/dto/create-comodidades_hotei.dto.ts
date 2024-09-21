import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateComodidadesHotelDto {
  @ApiProperty({
    description: 'Nome da comodidade',
    example: 'Piscina',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;
}

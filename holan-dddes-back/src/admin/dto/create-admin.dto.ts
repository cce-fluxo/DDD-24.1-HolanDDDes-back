/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({
    description: 'Relação admin-usuario',
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;
}

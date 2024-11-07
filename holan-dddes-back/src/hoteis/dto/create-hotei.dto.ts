/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsPhoneNumber, IsBoolean } from "class-validator";

export class CreatehotelDto {
  @ApiProperty({
    description: 'Nome do hotel',
    example: "Rio Palace Hotel",
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Telefone do hotel',
    example: "21 99999-9999",
  })
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  telefone: string;

  @ApiProperty({
    description: 'Descrição do hotel',
    example: 'Hotel 5 estrelas localizado em Copacabana',
  })
  @IsString()
  @IsOptional()
  sobre?: string;

  @ApiProperty({
    description: 'Número de visualizações do hotel',
    example: 100,
  })
  @IsNumber()
  @IsNotEmpty()
  visualizacoes: number;

  @ApiProperty({
    description: 'Algumas outras informações importantes sobre o hotel',
    example: "Hotel com piscina, café da manhã incluso e quartos com vista para o mar",
  })
  @IsOptional()
  @IsString()
  informacoes_extras?: string;

  @ApiProperty({
    description: 'Informação sobre o hotel aceitar ou não animais de estimação',
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  pet: boolean;

  @ApiProperty({
    description: 'Endereço do hotel',
    example: "Brasil, Rio de Janeiro, RJ, Bairro Tanqque, Rua dos Pobres, 27",
  })
  @IsNotEmpty()
  @IsString()
  endereco: string;

  @ApiProperty({
    description: 'Conexão do hotel ao seu proprietário',
    example: 1,
  })
  @IsOptional() // estamos resgatando ela do req.user
  proprietarioId: number;

  @ApiProperty({
    description: 'Hotel postado?',
    example: true,
  })
  @IsOptional() 
  @IsBoolean()
  postado: boolean;
}

/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class CreatehotelDto {
  @ApiProperty({
    description: 'Nome do hotel',
    example: "Rio Palace Hotel",
  })
  nome: string;

  @ApiProperty({
    description: 'Telefone do hotel',
    example: "21 99999-9999",
  })
  telefone: string;

  @ApiProperty({
    description: 'Descrição do hotel',
    example: 'Hotel 5 estrelas localizado em Copacabana',
  })
  sobre?: string;

  @ApiProperty({
    description: 'Número de visualizações do hotel',
    example: 100,
  })
  visualizacoes: number;

  @ApiProperty({
    description: 'Algumas outras informações importantes sobre o hotel',
    example: "Hotel com piscina, café da manhã incluso e quartos com vista para o mar",
  })
  informacoes_extras?: string;

  @ApiProperty({
    description: 'Informação sobre o hotel aceitar ou não animais de estimação',
    example: true,
  })
  pet: boolean;

  @ApiProperty({
    description: 'Conexão do hotel ao seu endereço',
    example: 1,
  })
  enderecoId: number;

  @ApiProperty({
    description: 'Conexão do hotel ao seu proprietário',
    example: 1,
  })
  proprietarioId: number;
}

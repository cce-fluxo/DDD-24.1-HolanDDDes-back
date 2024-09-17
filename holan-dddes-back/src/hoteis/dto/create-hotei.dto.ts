export class CreatehotelDto {
  nome: string;
  telefone: string;
  sobre?: string;
  descricao?: string;
  visualizacoes: number;
  informacoes_extras?: string;
  pet: boolean;
  enderecoId: number;
  proprietarioId: number;
}

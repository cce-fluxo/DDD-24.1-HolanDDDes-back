export class CreateHoteiDto {
  id: number;
  nome: string;
  telefone: string;
  sobre?: string;
  visualizacoes: number;
  informacoesExtras?: string;
  pet: boolean;
  enderecoId: number;
  proprietarioId: number;
}

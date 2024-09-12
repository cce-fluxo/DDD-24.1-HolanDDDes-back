export class CreateAvaliacaoAcomodacoeDto {
  id: number;
  custo_beneficio: number;
  atendimento: number;
  comida: number;
  limpeza: number;
  conforto: number;
  localizacao: number;
  comentario?: string;
  acomodacaoId: number;
  clinteId: number;
}

export class CreateAvaliacaoDto {
  custo_beneficio: number;
  atendimento: number;
  comida: number;
  limpeza: number;
  conforto: number;
  localizacao: number;
  comentario?: string;
  hotelId: number;
  clientId: number;
}

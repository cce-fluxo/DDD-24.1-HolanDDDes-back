export class CreateAvaliacaoDto {
  id: number;
  custoBeneficio: number;
  atendimento: number;
  comida: number;
  limpeza: number;
  conforto: number;
  localizacao: number;
  comentario?: string;
  hotelId: number;
  clientId: number;
}

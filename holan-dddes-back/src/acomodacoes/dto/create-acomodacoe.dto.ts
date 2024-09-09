export class CreateAcomodacoeDto {
  titulo: string;
  descricao?: string;
  banheiros: number;
  quartos: number;
  camas: number;
  valor_diaria: float;
  valor_pet: float;
  complemento: string;
  tipo_acomodacaoId: number;
  hotelId: number;
  FotoAcomodacao: list;
  Reserva: list;
  Gerenciamento_ganhos: list;
  Avaliacao_acomodacao: list;
  ComodidadeNaAcomodacao: list;
}

export class CreateAcomodacoeDto {
  id: number;
  titulo: string;
  descricao?: string;
  banheiros: number;
  quartos: number;
  camas: number;
  valor_diaria: number;
  valor_pet: number;
  complemento: string;
  tipo_acomodacaoId: number;
  hotelId: number;
}

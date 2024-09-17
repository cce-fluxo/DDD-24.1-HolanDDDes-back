export class CreateReservaDto {
  data_check_in: Date;
  data_check_out: Date;
  quantidade_pessoas: number;
  status: string;
  aceita_pet: boolean;
  clienteId: number;
  acomodacaoId: number;
  cupomId: number;
}

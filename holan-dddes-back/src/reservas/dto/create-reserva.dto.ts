export class CreateReservaDto {
  id: number;
  dataCheckIn: Date;
  dataCheckOut: Date;
  quantidadePessoas: number;
  status: string;
  aceitaPet: boolean;
  clienteId: number;
  acomodacaoId: number;
}

export class CreateCupomDto {
  id: number;
  titulo: string;
  status: boolean;
  codigo: string;
  desconto: number;
  data_validade: Date;
  descricao: string;
}

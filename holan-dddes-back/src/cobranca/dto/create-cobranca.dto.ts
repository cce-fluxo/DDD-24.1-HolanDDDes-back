export class CreateCobrancaDto {
  id: number;
  dataPagamento?: Date;
  dataVencimento?: Date;
  valor?: number;
  status?: string;
  reservaId: number;
}

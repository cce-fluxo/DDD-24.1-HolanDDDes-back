export class CreateCobrancaDto {
  dataPagamento?: Date;
  dataVencimento?: Date;
  valor?: number;
  status?: string;
  reservaId: number;
}

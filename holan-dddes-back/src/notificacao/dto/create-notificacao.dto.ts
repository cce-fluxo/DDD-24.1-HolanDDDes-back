export class CreateNotificacaoDto {
  mensagem: string;
  titulo: string;
  usuarioId: number;
  leitura: boolean;
  data_criacao: Date;
}

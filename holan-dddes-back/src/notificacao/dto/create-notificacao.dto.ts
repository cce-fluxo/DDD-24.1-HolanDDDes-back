export class CreateNotificacaoDto {
  id: number;
  mensagem: string;
  titulo: string;
  usuarioId: number;
  leitura: boolean;
  dataCriacao: Date;
}

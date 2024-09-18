import { ApiProperty } from "@nestjs/swagger";

export class CreateNotificacaoDto {
  @ApiProperty({
    description: "Mensagem que será exibida na notificação",
    example:"Fulano acabou de se hospedar no seu hotel XXX",
  })
  mensagem: string;

  @ApiProperty({
    description: "Títulod e notificação.",
    example:"Novo Hospede",
  })
  titulo: string;

  @ApiProperty({
    description: "ID único do usuário que receberá a notficação",
    example:"123456789",
  })
  usuarioId: number;

  @ApiProperty({
    description: "Registra se a notificação foi ou não aberta",
    example:"false",
  })
  leitura: boolean;

  @ApiProperty({
    description: "Registra a data em que a notificação foi criada",
    example:"2024-01-01T00:00:00Z",
  })
  data_criacao: Date;
}

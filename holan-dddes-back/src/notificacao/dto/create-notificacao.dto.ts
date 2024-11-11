import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateNotificacaoDto {
  @ApiProperty({
    description: "Mensagem que será exibida na notificação",
    example:"Fulano acabou de se hospedar no seu hotel XXX",
  })
  @IsString()
  @IsOptional()
  mensagem?: string;

  @ApiProperty({
    description: "Título da notificação.",
    example:"Novo Hospede",
  })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({
    description: "ID único do usuário que receberá a notficação",
    example:"123456789",
  })
  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;

  @ApiProperty({
    description: "Registra se a notificação foi ou não aberta",
    example:"false",
  })
  @IsBoolean()
  @IsOptional()
  leitura?: boolean;

  @ApiProperty({
    description: "Registra a data em que a notificação foi criada",
    example:"2024-01-01T00:00:00Z",
  })
  @IsDate()
  @IsOptional()
  data_criacao?: Date;
}

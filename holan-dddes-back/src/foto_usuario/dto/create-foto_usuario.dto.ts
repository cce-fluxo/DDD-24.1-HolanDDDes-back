import { ApiProperty } from "@nestjs/swagger";

export class CreateFotoUsuarioDto {
  @ApiProperty({
    description: "Foto que será exibida no perfil do usuário",
    example:"http://link_para_a_foto.com",
  })
  url_foto: string;

  @ApiProperty({
    description: "ID único do usuário",
    example:"123456789",
  })
  usuarioId: number;
}

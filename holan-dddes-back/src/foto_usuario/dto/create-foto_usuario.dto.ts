import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsUrl } from "class-validator";

export class CreateFotoUsuarioDto {
  
  @ApiProperty({
    description: "Foto que será exibida no perfil do usuário",
    example:"http://link_para_a_foto.com",
  })
  @IsUrl()
  @IsNotEmpty()
  url_foto: string;

  @ApiProperty({
    description: "ID único do usuário",
    example:"123456789",
  })
  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;
}

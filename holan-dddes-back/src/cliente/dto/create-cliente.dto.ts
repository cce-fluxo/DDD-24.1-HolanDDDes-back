import { IsNotEmpty } from "class-validator";

export class CreateClienteDto {
  @IsNotEmpty()
  usuarioId: number;
}

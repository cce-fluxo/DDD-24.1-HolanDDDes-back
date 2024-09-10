export class CreateUsuarioDto {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  telefone?: string;
  dataNascimento?: Date;
  vip: boolean;
}

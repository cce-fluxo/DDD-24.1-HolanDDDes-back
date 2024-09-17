export class CreateUsuarioDto {
  nome: string;
  sobrenome: string;
  hash_senha: string;
  email: string;
  telefone?: string;
  dataNascimento?: Date;
  vip: boolean;
}

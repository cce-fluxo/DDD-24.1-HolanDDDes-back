/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly prisma:PrismaService,
        private readonly userService: UsuarioService,
        private readonly jwtService: JwtService,
    ){}

    //Função para validar o usuário (para usar o await precisa ser assíncrona)
    async validateUser(email, password){
        // Busca no sistema para validar o usuário
        const user = await this.userService.findByEmail(email);

        // Verificação do usuário (se não existir usuário ou senha diferente da colocada, retorna null)
        if(!user || !bcrypt.compareSync(password, user.hash_senha)){
            throw new Error('Usuário ou senha inválidos');
        }
        // Se existir usuário e senha correta, retorna o usuário
        return {...user , hash_senha:undefined} //retorna o usuário sem a senha
    }

    // Função Login: com base no usuário, gera o JWT
    async login(user){
        if (!user) {
            throw new UnauthorizedException('Usuário não encontrado');
        }
    
        // Payload do JWT (tem o user.id e o user.email como atributos)
        const payload = { id: user.id, email: user.email, role: user.role};

        // Gerar o JWT (recebe o payload) (assinatura (variável de ambiente) e data de validade)
        const jwtToken = this.jwtService.sign(payload, {secret: process.env.JWT_SECRET, expiresIn: '1d'})
        return {
            // Retorna o token gerado
            access_token: jwtToken,
        }
    }
}


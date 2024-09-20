/* eslint-disable prettier/prettier */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class localStrategy extends PassportStrategy(Strategy){
    // Usuário e senha utilizados
    constructor(private readonly AuthService: AuthService){
        super({
            //no body da requisição
            usernameField: 'email',
            passwordField: 'senha',
        })
    }

    // Função que verificará se o usuário está no sistema e se a senha está correta
    validate(email: string, password: string){
        return this.AuthService.validateUser(email, password);
    }

}
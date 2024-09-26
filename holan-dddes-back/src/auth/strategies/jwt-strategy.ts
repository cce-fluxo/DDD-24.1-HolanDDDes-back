/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable() //Vamos validar o JWT, então é importada da biblioteca passport-jwt
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
        // Iremos verificar a validade do token e a assinatura do token
            
            // De onde vamos extrair o token (do cabeçalho da requisição) (Bearer)
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

            // Por padrão já é false
            ignoreExpiration: false,

            // Verificar chave de assinatura
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    // Função que verifica se o token é válido
    validate(payload){
        // Retorna o payload do token
        return {id: payload.id, email: payload.email, role: payload.role};
    }

}
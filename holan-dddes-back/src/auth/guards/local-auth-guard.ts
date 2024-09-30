/* eslint-disable prettier/prettier */
import { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// GUARD é uma classe que contém uma função que retorna um booleano que diz se pode ou não acessar a rota

export class LocalAuthGuard extends AuthGuard('local'){
    // Verifica a requisição que está sendo feita
    canActivate(context: ExecutionContext){
        // Só passamos esse atributo da nossa função para nossa classe pai (GUARD)
        //Todo GUARD possui uma função canActivate que diz se pode acessar a rota ou não
        return super.canActivate(context);
    }
}

//Todo GUARD usa uma estratégia
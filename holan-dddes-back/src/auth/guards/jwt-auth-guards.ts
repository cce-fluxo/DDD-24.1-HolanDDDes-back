/* eslint-disable prettier/prettier */
import { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt'){

    canActivate(context: ExecutionContext){

        return super.canActivate(context);
    }
}

// Aqui a estratégia mudou, queremos ver se o usuário está logado
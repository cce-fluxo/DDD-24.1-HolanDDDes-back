/* eslint-disable prettier/prettier */
// NestJS
import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  // Password
  import { AuthGuard } from '@nestjs/passport';
  // Roles
  import { ROLES_KEY } from '../decorators/roles.decorator';
  // JWT
  import { JwtService } from '@nestjs/jwt';
  // IsPublic
  import { IS_PUBLIC_KEY } from '../decorators/is-public.decorator';

  
  @Injectable()
  export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector, 
      private readonly jwtService: JwtService,
    ) {
      super();
    }
  
    async canActivate(context: ExecutionContext) {
      const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
  
      if (isPublic) {
        return true;
      }
      

      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      if (!requiredRoles) {
        return true;
      }

      const request = context.switchToHttp().getRequest();

      // Autorização
      const token = request.headers.authorization.split(' ')[1];
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const payload = this.jwtService.verify(token);

      const userRoles = payload.roles || [];
      const hasRole = () => userRoles.some((role) => requiredRoles.includes(role));
      if (!hasRole()) {
        throw new UnauthorizedException('Você não tem permissão para acessar este recurso');
      }

     return true;
  
    }
  }

// Aqui a estratégia mudou, queremos ver se o usuário está logado
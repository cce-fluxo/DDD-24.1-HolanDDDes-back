/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  // reflector para acessar metadados (papéis requeridos na rota)
  // jwtservice (para decodificar o token e pegar o usuário)

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable <boolean> {
    // Extrair os roles necessários da rota (decorador @Roles)
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    const usuario = context.switchToHttp().getRequest().user;

    // Verifica se o usuário possui os papéis exigidos
    return roles.some((role) => usuario.role?.includes(role));
  }
}

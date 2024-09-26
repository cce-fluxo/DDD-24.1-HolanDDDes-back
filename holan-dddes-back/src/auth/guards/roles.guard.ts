/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  // reflector para acessar metadados (papéis requeridos na rota)
  // jwtservice (para decodificar o token e pegar o usuário)

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // Extrair os roles necessários da rota (decorador @Roles)
    const requiredRole = this.reflector.get<string[]>('role', context.getHandler());
    const user = context.switchToHttp().getRequest().user;

    /// Checa se o usuário tem a permissão necessária
    if (!requiredRole) {
      return true; // Se não houver role requerida, permite acesso
    }

    const userRole = user?.userType; // Acessa a role do usuário diretamente
    return userRole === requiredRole; // Compara diretamente
  }
}

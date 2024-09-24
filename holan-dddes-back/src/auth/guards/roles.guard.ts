/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  // reflector para acessar metadados (papéis requeridos na rota)
  // jwtservice (para decodificar o token e pegar o usuário)

  canActivate(context: ExecutionContext): boolean {
    // Extrair os roles necessários da rota (decorador @Roles)
    const [req] = context.getArgs();
    const userPermissions = req?.user?.permission || [];
    const requiredPermissions = this.reflector.get('permissions', context.getHandler());
    const hasAllRequiredPermissions = requiredPermissions.every((permission) => userPermissions.includes(permission));

    if (requiredPermissions.ength === 0 || hasAllRequiredPermissions) {
      return true;
    }

    throw new ForbiddenException('Você não tem permissão para acessar este recurso');

  }
}

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
  constructor(
    private reflector: Reflector,
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

    const canActivate = await super.canActivate(context);

    if (!canActivate) {
      return false;
    }

    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles.length === 0) {
      return true; // Se não houver roles necessárias, permite o acesso
    }

    const request = context.switchToHttp().getRequest();

    // Autorização
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Token não encontrado');
    }

    // Fazendo split do token e vendo se ele foi colocado
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token não encontrado');
    }

    const payload = this.jwtService.decode(token);

    if (!payload) {
      throw new UnauthorizedException('Token inválido');
    }

    // Checagem dos papéis
    const userRole = payload.role; // Supondo que payload.role é uma string ou uma única role
    const hasRole = requiredRoles ? requiredRoles.includes(userRole) : true; // Se não houver roles necessárias, permite o acesso

    if (!hasRole) {
      throw new UnauthorizedException('Você não tem permissão para acessar este recurso');
    }

    return true;
  }
}
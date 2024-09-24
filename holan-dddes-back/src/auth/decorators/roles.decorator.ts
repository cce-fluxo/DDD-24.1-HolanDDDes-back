/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';

// Definindo o decorator para associar roles a rotas
export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

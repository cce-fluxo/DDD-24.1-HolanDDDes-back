import { SetMetadata } from '@nestjs/common';

// Definindo o decorator para associar roles a rotas
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

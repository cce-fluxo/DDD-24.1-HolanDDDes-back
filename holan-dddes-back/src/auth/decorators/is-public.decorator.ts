import { SetMetadata } from '@nestjs/common';

// Declarando rotas como públicas (é um decorator customizado)
export const IS_PUBLIC_KEY = 'isPublic';
export const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true);
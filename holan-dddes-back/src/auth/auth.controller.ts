/* eslint-disable prettier/prettier */
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth-guard';

// Responsável por guardar as rotas
@Controller('auth')
export class AuthController {
    // Constructor para poder importar o service onde irão ficar nossas funções
    constructor(private readonly authService: AuthService) {}

    // Login é a criação de um token, método post (rota: login)
    // Nosso email e nossa senha são colocados no login para acessar
    // Precisamos de um GUARD que pegue essas informações e verifique se o usuário colocado no login existe no sistema
    @UseGuards(LocalAuthGuard) // Guard responsável por verificar a existência do usuário, a senha e a adição do usuário no objeto-request
    @Post('login')
    login(@Request() req){
        return this.authService.login(req.user);
    }
}

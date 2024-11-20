/* eslint-disable prettier/prettier */
import { Body, Controller, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth-guard';
import { IsPublic } from './decorators/is-public.decorator';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthResetDto } from './dto/auth-resetar.dto';
import { AuthValidarTokenDto } from './dto/auth-validarToken.dto';
import { UpdateUsuarioDto } from 'src/usuario/dto/update-usuario.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    // Constructor para poder importar o service onde irão ficar nossas funções
    constructor(private readonly authService: AuthService) {}

    // Login é a criação de um token, método post (rota: login)
    // Nosso email e nossa senha são colocados no login para acessar
    // Precisamos de um GUARD que pegue essas informações e verifique se o usuário colocado no login existe no sistema
    @UseGuards(LocalAuthGuard) // Guard responsável por verificar a existência do usuário, a senha e a adição do usuário no objeto-request
    @IsPublic()
    @ApiOperation({
        summary: 'Rota para fazer login no sistema',
        description: 'Insira >>> email <<< e >>> senha <<< para fazer login no sistema',
    })
    @Post('login')
    login(@Request() req){
        return this.authService.login(req.user);
    }

    // Esqueci-minha-senha
    @IsPublic()
    @ApiOperation({
        summary: 'Rota para recuperação de senha no sistema',
        description: 'Insira >>> email <<< para iniciar a recuperação da senha que será feito através do envio de um token por email',
    })
    @Patch('recuperar-senha')
    async resetar(@Body() data: AuthResetDto) {
        return await this.authService.esqueciSenha(data);
    }

    // Validação do Token
    @IsPublic()
    @ApiOperation({
        summary: 'Rota para validar o token',
        description: 'Insira >>> token <<< e >>> email <<< para poder trocar a senha',
    })
    @Post('recuperar-senha/validar-token')
    async validarToken(@Body() data: AuthValidarTokenDto) {
        return await this.authService.validarToken(data);
    }

    @IsPublic()
    @ApiOperation({
        summary: 'Rota para trocar a senha no sistema',
        description: 'Insira >>> hash_senha <<< para trocá-la',
    })
    @Patch('recuperar-senha/validar-token/:token')
    async alterarSenha(@Param('token') token: string, @Body() data: UpdateUsuarioDto) {
        return await this.authService.atualizarSenha(token, data);
    }
}


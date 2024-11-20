/* eslint-disable prettier/prettier */
import {
    BadRequestException,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';
import { AuthValidarTokenDto } from './dto/auth-validarToken.dto';
import { UpdateUsuarioDto } from 'src/usuario/dto/update-usuario.dto';
import { AuthResetDto } from './dto/auth-resetar.dto';

// Para envio do email de recuperação de senha
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.TRANSPORTER_EMAIL,
      pass: process.env.TRANSPORTER_SENHA,
    },
  });

@Injectable()
export class AuthService {
    constructor(private readonly prisma:PrismaService,
        private readonly userService: UsuarioService,
        private readonly jwtService: JwtService,
    ){}

    //Função para validar o usuário (para usar o await precisa ser assíncrona)
    async validateUser(email, password){
        // Busca no sistema para validar o usuário
        const user = await this.userService.findByEmail(email);

        // Verificação do usuário (se não existir usuário ou senha diferente da colocada, retorna null)
        if(!user || !bcrypt.compareSync(password, user.hash_senha)){
            throw new Error('Usuário ou senha inválidos');
        }
        // Se existir usuário e senha correta, retorna o usuário
        return {...user , hash_senha:undefined} //retorna o usuário sem a senha
    }

    // Função Login: com base no usuário, gera o JWT
    async login(user){
        if (!user) {
            throw new UnauthorizedException('Usuário não encontrado');
        }
    
        // Payload do JWT (tem o user.id e o user.email como atributos)
        console.log(user);
        const payload = { id: user.id, email: user.email, role: user.role};
        const User = {id: user.id, name: user.nome, email: user.email, role: user.role};

        // Gerar o JWT (recebe o payload) (assinatura (variável de ambiente) e data de validade)
        const jwtToken = this.jwtService.sign(payload, {secret: process.env.JWT_SECRET, expiresIn: '1d'})
        return {
            // Retorna o token gerado e o usuário
            access_token: jwtToken,
            user: User,
        }
    }

    
  // Método para gerar token aleatório
  generateRandomToken(length: number): string {
    return crypto.randomBytes(length).toString('hex'); // Gera um token alfanumérico em base16 (hex)
  }

  // Esqueci-minha-senha
  async esqueciSenha(authResetDto: AuthResetDto) {
    // verifica a existência do usuário
    const usuario = await this.userService.findByEmail(authResetDto.email);

    if (!usuario) {
      throw new HttpException(
        'Usuário não foi encontrado!',
        HttpStatus.NOT_FOUND,
      );
    }

    // Gera um token com expiração de 10 minutos
    const token = this.generateRandomToken(16); // token com 16 caracteres

    // associando o token ao usuário a partir do envio do email
    await this.enviarEmail(authResetDto.email, token)
      .then(async () => {
        await this.prisma.usuario.update({
          where: { email: authResetDto.email },
          data: { token_resetar_senha: token },
        });
      })
      .catch(async (err) => {
        throw new BadRequestException(
          'Email não foi enviado, verifique e tente de novo! Erro: ' +
            err.message,
        );
      });
    return 'Token enviado com sucesso';
  }

  // Função de envio do token por email
  enviarEmail(email: string, token: string) {
    // verify connection configuration
    transporter.verify(function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });

    return transporter.sendMail({
      from: 'Suporte bonvoyage <holandddesvoador@gmail.com>',
      to: email,
      subject: 'Recuperação de Senha - Bonvoyage',
      html: `
                <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
                    <h2 style="color: #FD6944; text-align: center;">Recuperação de Senha</h2>
                    <p>Olá,</p>
                    <p>Você solicitou a recuperação de sua senha no sistema <b style = "color: #DC143B;">Bonvoyage</b>. Para prosseguir, utilize o token abaixo:</p>
                    <div style="text-align: center; margin: 20px 0;">
                        <span style="font-size: 24px; font-weight: bold; color: #DC143B;">${token}</span>
                    </div>
                    <p>Caso você não tenha solicitado a recuperação de senha, ignore este email.</p>
                    <p>Atenciosamente,<br><b>Equipe Bonvoyage</b></p>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <footer style="text-align: center; font-size: 12px; color: #777;">
                        <p>Este é um email automático. Por favor, não responda.</p>
                        <p>&copy; ${new Date().getFullYear()} Vai HolanDDDês! - Todos os direitos reservados.</p>
                    </footer>
                </div>
            `,
      text: `Olá,\n\nVocê solicitou a recuperação de sua senha no sistema MedCards. Para prosseguir, utilize o token abaixo:\n\n${token}\n\nCaso você não tenha solicitado a recuperação de senha, ignore este email.\n\nAtenciosamente,\nEquipe MedCards\n\nEste é um email automático. Por favor, não responda.\n© ${new Date().getFullYear()} MedCards - Todos os direitos reservados.`,
    });
  }

  // validação do token
  async validarToken(validarTokenDto: AuthValidarTokenDto) {
    const usuario = await this.userService.findByEmail(validarTokenDto.email);
    if (usuario.token_resetar_senha != validarTokenDto.token) {
      throw new BadRequestException('Token inválido!');
    }
    return HttpStatus.OK;
  }

  // atualização da senha
  async atualizarSenha(token: string, updateUsuarioDto: UpdateUsuarioDto) {
    await this.prisma.usuario.update({
      where: { token_resetar_senha: token },
      data: {
        hash_senha: await bcrypt.hash(updateUsuarioDto.hash_senha, 10),
      },
    });
    return { message: 'Senha atualizada com sucesso' };
  }
  catch(error) {
    console.error('Erro ao atualizar a senha:', error);
    throw new Error('Não foi possível atualizar a senha');
  }
}



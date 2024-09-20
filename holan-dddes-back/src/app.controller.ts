/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth-guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Ver se a pessoa fez o login
  @UseGuards(JwtAuthGuard)
  @Get()
  // Me dá o usuário que acessa a rota
  getHello( @Request() req ) {
    console.log(req.user);
    return this.appService.getHello();
  }
}

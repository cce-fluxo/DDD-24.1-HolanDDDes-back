/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards, Request, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth-guards';
import { RolesGuard } from './auth/guards/roles.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Ver se a pessoa fez o login
  @SetMetadata('permissões', ['admin'])
  @UseGuards(RolesGuard, RolesGuard)
  @Get()
  // Me dá o usuário que acessa a rota
  getHello( @Request() req ) {
    console.log(req.user);
    return this.appService.getHello();
  }
}

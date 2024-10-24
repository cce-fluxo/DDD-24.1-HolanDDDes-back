/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  //https://docs.nestjs.com/security/cors
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    origin: '*',                              // funcionar para todos
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Ativação do class-validator
  app.useGlobalPipes(
    new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }),
  );

  //https://docs.nestjs.com/openapi/introduction
  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - HolanDDDês')
    .setDescription(
      'HolanDDDês'
    )
    .setVersion('1.0')
    .addTag('acomodacoes')
    .addTag('admin')
    .addTag('auth')
    .addTag('avaliacao')
    .addTag('avaliacao_acomodacoes')
    .addTag('cliente')
    .addTag('cobranca')
    .addTag('comodidade_acomodacoes')
    .addTag('comodidade_hoteis')
    .addTag('cupom')
    .addTag('descricao_detalhada')
    .addTag('enderecos')
    .addTag('favorito')
    .addTag('foto_usuario')
    .addTag('fotos_acomodacoes')
    .addTag('fotos_hoteis')
    .addTag('gerenciamento_ganho')
    .addTag('gerenciamento_ganho_acomodacao')
    .addTag('hoteis')
    .addTag('interesse')
    .addTag('notificacao')
    .addTag('proprietario')
    .addTag('reservas')
    .addTag('tipo_acomodacoes')
    .addTag('usuario')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3300);
}

bootstrap();

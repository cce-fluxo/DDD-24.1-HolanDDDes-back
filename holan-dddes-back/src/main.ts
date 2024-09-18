import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'localhost:3300',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - Fábrica de Sinapse')
    .setDescription(
      'O Swagger (aka OpenApi) é uma biblioteca muito conhecida no universo backend, estando disponível para diversas linguagens e frameworks. Ela gera um site interno no seu backend que descreve, com muitos detalhes, cada endpoint e estrutura de entidades presentes na sua aplicação.',
    )
    .setVersion('1.0')
    .addTag('associacao_cupom_cliente')
    .addTag('associacao_cupom_hotel')
    .addTag('associacao_proprietario_interesse')
    .addTag('avalaicao')
    .addTag('avaliacao_acomodacoes')
    .addTag('cliente')
    .addTag('cobranca')
    .addTag('comodidade_acomodacoes')
    .addTag('comodidade_hoteis')
    .addTag('cupom')
    .addTag('database')
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
    .addTag('tipo_acomodacao')
    .addTag('usuario')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3300);
}

bootstrap();

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcomodacoesModule } from './acomodacoes/acomodacoes.module';
import { ComodidadeAcomodacoesModule } from './comodidade_acomodacoes/comodidade_acomodacoes.module';
import { FotosAcomodacoesModule } from './fotos_acomodacoes/fotos_acomodacoes.module';
import { ReservasModule } from './reservas/reservas.module';
import { TipoAcomodacoesModule } from './tipo_acomodacoes/tipo_acomodacoes.module';
import { AvaliacaoAcomodacoesModule } from './avaliacao_acomodacoes/avaliacao_acomodacoes.module';
import { HoteisModule } from './hoteis/hoteis.module';
import { FotosHoteisModule } from './fotos_hoteis/fotos_hoteis.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { ComodidadesHoteisModule } from './comodidades_hoteis/comodidades_hoteis.module';
import { DescricaoDetalhadaModule } from './descricao_detalhada/descricao_detalhada.module';
import { FotoUsuarioModule } from './foto_usuario/foto_usuario.module';
import { NotificacaoModule } from './notificacao/notificacao.module';
import { InteresseModule } from './interesse/interesse.module';
import { FavoritoModule } from './favorito/favorito.module';
import { CupomModule } from './cupom/cupom.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProprietarioModule } from './proprietario/proprietario.module';
import { CobrancaModule } from './cobranca/cobranca.module';
import { GerenciamentoGanhoModule } from './gerenciamento_ganho/gerenciamento_ganho.module';
import { GerenciamentoGanhoAcomodacaoModule } from './gerenciamento_ganho_acomodacao/gerenciamento_ganho_acomodacao.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { PrismaService } from './database/prisma.service';
import { AssociacaoCupomClienteModule } from './associacao_cupom_cliente/associacao_cupom_cliente.module';
import { AssociacaoCupomHotelModule } from './associacao_cupom_hotel/associacao_cupom_hotel.module';
import { AssociacaoProprietarioInteresseModule } from './associacao_proprietario_interesse/associacao_proprietario_interesse.module';



@Module({
  imports: [
    AcomodacoesModule,
    ComodidadeAcomodacoesModule,
    FotosAcomodacoesModule,
    ReservasModule,
    TipoAcomodacoesModule,
    AvaliacaoAcomodacoesModule,
    HoteisModule,
    FotosHoteisModule,
    EnderecosModule,
    ComodidadesHoteisModule,
    DescricaoDetalhadaModule,
    FotoUsuarioModule,
    NotificacaoModule,
    InteresseModule,
    FavoritoModule,
    CupomModule,
    UsuarioModule,
    ClienteModule,
    ProprietarioModule,
    CobrancaModule,
    GerenciamentoGanhoModule,
    GerenciamentoGanhoAcomodacaoModule,
    AvaliacaoModule,
    AssociacaoCupomClienteModule,
    AssociacaoCupomHotelModule,
    AssociacaoProprietarioInteresseModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

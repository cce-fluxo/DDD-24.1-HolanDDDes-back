import { Module } from '@nestjs/common';
import { FotoUsuarioService } from './foto_usuario.service';
import { FotoUsuarioController } from './foto_usuario.controller';

@Module({
  controllers: [FotoUsuarioController],
  providers: [FotoUsuarioService],
})
export class FotoUsuarioModule {}

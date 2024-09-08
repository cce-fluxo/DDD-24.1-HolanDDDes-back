import { Injectable } from '@nestjs/common';
import { CreateFotoUsuarioDto } from './dto/create-foto_usuario.dto';
import { UpdateFotoUsuarioDto } from './dto/update-foto_usuario.dto';

@Injectable()
export class FotoUsuarioService {
  create(createFotoUsuarioDto: CreateFotoUsuarioDto) {
    return 'This action adds a new fotoUsuario';
  }

  findAll() {
    return `This action returns all fotoUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fotoUsuario`;
  }

  update(id: number, updateFotoUsuarioDto: UpdateFotoUsuarioDto) {
    return `This action updates a #${id} fotoUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} fotoUsuario`;
  }
}

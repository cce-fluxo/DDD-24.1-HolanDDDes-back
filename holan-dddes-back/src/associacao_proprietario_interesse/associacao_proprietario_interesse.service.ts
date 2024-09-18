import { Injectable } from '@nestjs/common';
import { CreateAssociacaoProprietarioInteresseDto } from './dto/create-associacao_proprietario_interesse.dto';
import { UpdateAssociacaoProprietarioInteresseDto } from './dto/update-associacao_proprietario_interesse.dto';

@Injectable()
export class AssociacaoProprietarioInteresseService {
  create(createAssociacaoProprietarioInteresseDto: CreateAssociacaoProprietarioInteresseDto) {
    return 'This action adds a new associacaoProprietarioInteresse';
  }

  findAll() {
    return `This action returns all associacaoProprietarioInteresse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} associacaoProprietarioInteresse`;
  }

  update(id: number, updateAssociacaoProprietarioInteresseDto: UpdateAssociacaoProprietarioInteresseDto) {
    return `This action updates a #${id} associacaoProprietarioInteresse`;
  }

  remove(id: number) {
    return `This action removes a #${id} associacaoProprietarioInteresse`;
  }
}

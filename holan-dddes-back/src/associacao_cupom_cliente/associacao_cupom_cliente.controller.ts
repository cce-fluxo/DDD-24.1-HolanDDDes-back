import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssociacaoCupomClienteService } from './associacao_cupom_cliente.service';
import { CreateAssociacaoCupomClienteDto } from './dto/create-associacao_cupom_cliente.dto';
import { UpdateAssociacaoCupomClienteDto } from './dto/update-associacao_cupom_cliente.dto';

@Controller('associacao-cupom-cliente')
export class AssociacaoCupomClienteController {
  constructor(private readonly associacaoCupomClienteService: AssociacaoCupomClienteService) {}

  @Post()
  create(@Body() createAssociacaoCupomClienteDto: CreateAssociacaoCupomClienteDto) {
    return this.associacaoCupomClienteService.create(createAssociacaoCupomClienteDto);
  }

  @Get()
  findAll() {
    return this.associacaoCupomClienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.associacaoCupomClienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssociacaoCupomClienteDto: UpdateAssociacaoCupomClienteDto) {
    return this.associacaoCupomClienteService.update(+id, updateAssociacaoCupomClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.associacaoCupomClienteService.remove(+id);
  }
}

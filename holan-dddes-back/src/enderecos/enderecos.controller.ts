import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags("enderecos")
@Controller('enderecos')
export class EnderecosController {
  constructor(private readonly enderecosService: EnderecosService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um novo endereço',
    description: 'Cria um novo endereço com base nos dados fornecidos',
  })
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecosService.create(createEnderecoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todos os endereços',
    description: 'Busca todos os endereços com base nos filtros fornecidos',
  })
  findAll(@Body() findAllEnderecoDto: any) {
    return this.enderecosService.findAll(findAllEnderecoDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca um endereço específico',
    description: 'Busca um endereço específico com base no id fornecido',
  })
  findOne(@Param('id') id: string) {
    return this.enderecosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um endereço',
    description: 'Atualiza um endereço com base no id fornecido e nos dados fornecidos',
  })
  update(
    @Param('id') id: string,
    @Body() updateEnderecoDto: UpdateEnderecoDto,
  ) {
    return this.enderecosService.update(+id, updateEnderecoDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove um endereço',
    description: 'Remove um endereço com base no id fornecido',
  })
  remove(@Param('id') id: string) {
    return this.enderecosService.remove(+id);
  }
}

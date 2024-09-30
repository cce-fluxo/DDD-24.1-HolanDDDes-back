import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags("enderecos")
@Controller('enderecos')
export class EnderecosController {
  constructor(private readonly enderecosService: EnderecosService) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  @ApiOperation({
    summary: 'Cria um novo endereço',
    description: 'Cria um novo endereço com base nos dados fornecidos',
  })
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecosService.create(createEnderecoDto);
  }

  @Get()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin')
  @ApiOperation({
    summary: 'Busca todos os endereços',
    description: 'Busca todos os endereços com base nos filtros fornecidos',
  })
  findAll(@Body() findAllEnderecoDto: any) {
    return this.enderecosService.findAll(findAllEnderecoDto);
  }

  @Get(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin')
  @ApiOperation({
    summary: 'Busca um endereço específico',
    description: 'Busca um endereço específico com base no id fornecido',
  })
  findOne(@Param('id') id: string) {
    return this.enderecosService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
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
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario')
  @ApiOperation({
    summary: 'Remove um endereço',
    description: 'Remove um endereço com base no id fornecido',
  })
  remove(@Param('id') id: string) {
    return this.enderecosService.remove(+id);
  }
}

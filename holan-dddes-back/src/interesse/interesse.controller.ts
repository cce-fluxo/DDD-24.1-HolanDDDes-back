import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InteresseService } from './interesse.service';
import { CreateInteresseDto } from './dto/create-interesse.dto';
import { UpdateInteresseDto } from './dto/update-interesse.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('interesse')
@Controller('interesse')
export class InteresseController {
  constructor(private readonly interesseService: InteresseService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um novo interesse',
    description: 'Cria um novo interesse com base nos dados fornecidos',
  })
  create(@Body() createInteresseDto: CreateInteresseDto) {
    return this.interesseService.create(createInteresseDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todos os interesses',
    description: 'Busca todos os interesses com base nos filtros fornecidos',
  })
  findAll(@Body() findAllInteresseDto: any) {
    return this.interesseService.findAll(findAllInteresseDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca um interesse específico',
    description: 'Busca um interesse específico com base no id fornecido',
  })
  findOne(@Param('id') id: number) {
    return this.interesseService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um interesse',
    description: 'Atualiza um interesse com base no id fornecido e nos dados fornecidos',
  })
  update(
    @Param('id') id: number,
    @Body() updateInteresseDto: UpdateInteresseDto,
  ) {
    return this.interesseService.update(+id, updateInteresseDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove um interesse',
    description: 'Remove um interesse com base no id fornecido',
  })
  remove(@Param('id') id: number) {
    return this.interesseService.remove(+id);
  }

  //Rota específica para buscar os usuarios que possuem um interesse
  @Get(':id/proprietario')
  @ApiOperation({
    summary: 'Busca os proprietarios que possuem um interesse',
    description: 'Busca os proprietarios que possuem um interesse já especificado com base no id fornecido',
  })
  findProprietarios(@Param('id') id: number) {
    return this.interesseService.findProprietario(+id);
  }
}

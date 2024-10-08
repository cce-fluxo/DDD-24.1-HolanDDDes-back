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
import { InteresseService } from './interesse.service';
import { CreateInteresseDto } from './dto/create-interesse.dto';
import { UpdateInteresseDto } from './dto/update-interesse.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';

@ApiTags('interesse')
@Controller('interesse')
export class InteresseController {
  constructor(private readonly interesseService: InteresseService) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin') //somente o administrador pode criar interesse
  @ApiOperation({
    summary: 'Cria um novo interesse',
    description: 'Cria um novo interesse com base nos dados fornecidos',
  })
  create(@Body() createInteresseDto: CreateInteresseDto) {
    return this.interesseService.create(createInteresseDto);
  }

  @Get() // todos logados podem acessar os interesses
  @ApiOperation({
    summary: 'Busca todos os interesses',
    description: 'Busca todos os interesses com base nos filtros fornecidos',
  })
  findAll(@Body() findAllInteresseDto: any) {
    return this.interesseService.findAll(findAllInteresseDto);
  }

  @Get(':id') // todos logados podem acessar um interesse
  @ApiOperation({
    summary: 'Busca um interesse específico',
    description: 'Busca um interesse específico com base no id fornecido',
  })
  findOne(@Param('id') id: number) {
    return this.interesseService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin') //somente o administrador pode alterar interesse
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
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin') //somente o administrador pode deletar interesse
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
  getProprietarios(@Param('id') id: number) {
    return this.interesseService.getProprietariosByInteresse(+id);
  }
}

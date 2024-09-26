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
import { tipoAcomodacaosService } from './tipo_acomodacoes.service';
import { CreatetipoAcomodacaoDto } from './dto/create-tipo_acomodacoe.dto';
import { UpdatetipoAcomodacaoDto } from './dto/update-tipo_acomodacoe.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';

@ApiTags('tipo_acomodacoes')
@Controller('tipo-acomodacoes')
export class tipoAcomodacaosController {
  constructor(
    private readonly tipoAcomodacaosService: tipoAcomodacaosService,
  ) {}

  @Post()
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin') //somente o administrador pode criar tipo-acomodação
  create(@Body() createtipoAcomodacaoDto: CreatetipoAcomodacaoDto) {
    return this.tipoAcomodacaosService.create(createtipoAcomodacaoDto);
  }

  @Get() // não precisa de acesso específico
  findAll(@Body() findAlltipoAcomodacaoDto: any) {
    return this.tipoAcomodacaosService.findAll(findAlltipoAcomodacaoDto);
  }

  @Get(':id') // não precisa de acesso específico
  findOne(@Param('id') id: string) {
    return this.tipoAcomodacaosService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin') //somente o administrador pode alterar tipo-acomodação
  update(
    @Param('id') id: string,
    @Body() updatetipoAcomodacaoDto: UpdatetipoAcomodacaoDto,
  ) {
    return this.tipoAcomodacaosService.update(+id, updatetipoAcomodacaoDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin', 'proprietario') //somente o cliente não pode deletar tipo-acomodação
  remove(@Param('id') id: string) {
    return this.tipoAcomodacaosService.remove(+id);
  }
}

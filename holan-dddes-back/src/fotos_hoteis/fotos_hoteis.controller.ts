import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { fotosHotelsService } from './fotos_hoteis.service';
import { CreatefotosHotelDto } from './dto/create-fotos_hotei.dto';
import { UpdatefotosHotelDto } from './dto/update-fotos_hotei.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('fotos_hoteis')
@Controller('fotos-hoteis')
export class fotosHotelsController {
  constructor(private readonly fotosHotelsService: fotosHotelsService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria uma nova foto de hotel',
    description: 'Cria uma nova foto de hotel com base nos dados fornecidos',
  })
  create(@Body() createfotosHotelDto: CreatefotosHotelDto) {
    return this.fotosHotelsService.create(createfotosHotelDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todas as fotos de hotel',
    description: 'Busca todas as fotos de hotel com base nos filtros fornecidos',
  })
  findAll(@Body() findAllfotosHotelDto: any) {
    return this.fotosHotelsService.findAll(findAllfotosHotelDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca uma foto de hotel específica',
    description: 'Busca uma foto de hotel específica com base no id fornecido',
  })
  findOne(@Param('id') id: string) {
    return this.fotosHotelsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza uma foto de hotel',
    description: 'Atualiza uma foto de hotel com base no id fornecido e nos dados fornecidos',
  })
  update(
    @Param('id') id: string,
    @Body() updatefotosHotelDto: UpdatefotosHotelDto,
  ) {
    return this.fotosHotelsService.update(+id, updatefotosHotelDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove uma foto de hotel',
    description: 'Remove uma foto de hotel com base no id fornecido',
  })
  remove(@Param('id') id: string) {
    return this.fotosHotelsService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FavoritoService } from './favorito.service';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('favorito')
@Controller('favorito')
export class FavoritoController {
  constructor(private readonly favoritoService: FavoritoService) {}

  @Post()
  create(@Body() createFavoritoDto: CreateFavoritoDto) {
    return this.favoritoService.create(createFavoritoDto);
  }

  @Get()
  findAll(@Body() findAllFavoritoDto: any) {
    return this.favoritoService.findAll(findAllFavoritoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.favoritoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateFavoritoDto: UpdateFavoritoDto,
  ) {
    return this.favoritoService.update(+id, updateFavoritoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.favoritoService.remove(+id);
  }
}

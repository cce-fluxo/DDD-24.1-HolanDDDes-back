import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AcomodacoesService } from './acomodacoes.service';
import { CreateAcomodacoeDto } from './dto/create-acomodacoe.dto';
import { UpdateAcomodacoeDto } from './dto/update-acomodacoe.dto';

@Controller('acomodacoes')
export class AcomodacoesController {
  constructor(private readonly acomodacoesService: AcomodacoesService) {}

  @Post()
  create(@Body() createAcomodacoeDto: CreateAcomodacoeDto) {
    return this.acomodacoesService.create(createAcomodacoeDto);
  }

  @Get()
  findAll() {
    const findAllAcomaodacoesDto = {};
    return this.acomodacoesService.findAll(findAllAcomaodacoesDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acomodacoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAcomodacoeDto: UpdateAcomodacoeDto,
  ) {
    return this.acomodacoesService.update(+id, updateAcomodacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acomodacoesService.remove(+id);
  }
}

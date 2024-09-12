import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CobrancaService } from './cobranca.service';
import { CreateCobrancaDto } from './dto/create-cobranca.dto';
import { UpdateCobrancaDto } from './dto/update-cobranca.dto';

@Controller('cobranca')
export class CobrancaController {
  constructor(private readonly cobrancaService: CobrancaService) {}

  @Post()
  create(@Body() createCobrancaDto: CreateCobrancaDto) {
    return this.cobrancaService.create(createCobrancaDto);
  }

  @Get()
  findAll(@Body() findAllCobrancaDto: any) {
    return this.cobrancaService.findAll(findAllCobrancaDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cobrancaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCobrancaDto: UpdateCobrancaDto,
  ) {
    return this.cobrancaService.update(+id, updateCobrancaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cobrancaService.remove(+id);
  }
}

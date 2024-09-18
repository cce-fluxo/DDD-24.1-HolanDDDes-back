import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CupomService } from './cupom.service';
import { CreateCupomDto } from './dto/create-cupom.dto';
import { UpdateCupomDto } from './dto/update-cupom.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cupom')
@Controller('cupom')
export class CupomController {
  constructor(private readonly cupomService: CupomService) {}

  @Post()
  create(@Body() createCupomDto: CreateCupomDto) {
    return this.cupomService.create(createCupomDto);
  }

  @Get()
  findAll(@Body() findAllCupomDto: any) {
    return this.cupomService.findAll(findAllCupomDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cupomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCupomDto: UpdateCupomDto) {
    return this.cupomService.update(+id, updateCupomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cupomService.remove(+id);
  }
}

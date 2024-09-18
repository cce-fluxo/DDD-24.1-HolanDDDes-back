import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ComodidadeNoHotelService } from './comodidade-no-hotel.service';
import { CreateComodidadeNoHotelDto } from './dto/create-comodidade_no_hotel.dto';
import { UpdateComodidadeNoHotelDto } from './dto/update-comodidade_no_hotel.dto';

@Controller('comodidade-no-hotel')
export class ComodidadeNoHotelController {
  constructor(
    private readonly comodidadeNoHotelService: ComodidadeNoHotelService,
      ) {}
    
    @Post()
    create(@Body() createComodidadeNoHotelDto: CreateComodidadeNoHotelDto) {
    return this.comodidadeNoHotelService.create(
        createComodidadeNoHotelDto,
    );
    }

    @Get()
    findAll(@Body() findAllComodidadeNoHotelDto: any) {
    return this.comodidadeNoHotelService.findAll(
        findAllComodidadeNoHotelDto,
    );
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
    return this.comodidadeNoHotelService.findOne(+id);
    }

    @Patch(':id')
    update(
    @Param('id') id: string,
    @Body() updateComodidadeNoHotelDto: UpdateComodidadeNoHotelDto,
    ) {
    return this.comodidadeNoHotelService.update(
        +id,
        updateComodidadeNoHotelDto,
    );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.comodidadeNoHotelService.remove(+id);
    }
}

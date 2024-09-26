/* eslint-disable prettier/prettier */
import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
constructor(
    private readonly adminService: AdminService,
) {}

@Post()
@IsPublic()
@ApiOperation({
    summary: 'Cria um novo administrador',
    description: 'Cria um novo administrador com base nos dados fornecidos',
})
create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
}

@Get()
@Roles('admin')
@ApiOperation({
    summary: 'Busca todos os administradores',
    description: 'Busca todos os administradores com base nos filtros fornecidos',
})
findAll(@Body() findAllAdminDto: any) {
    return this.adminService.findAll(findAllAdminDto);
}

@Get(':id')
@Roles('admin')
@ApiOperation({
    summary: 'Busca um administrador específico',
    description: 'Busca um administrador específico com base no id fornecido',
})
findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
}

@Patch(':id')
@Roles('admin')
@ApiOperation({
    summary: 'Atualiza um administrador',
    description: 'Atualiza um administrador com base no id fornecido',  
})
update(
    @Param('id') id: string,
    @Body() UpdateAdminDto: UpdateAdminDto,
) {
    return this.adminService.update(+id, UpdateAdminDto);
}

@Delete(':id')
@Roles('admin')
@ApiOperation({
    summary: 'Remove um administrador',
    description: 'Remove um administrador com base no id fornecido',
})
remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
}
}

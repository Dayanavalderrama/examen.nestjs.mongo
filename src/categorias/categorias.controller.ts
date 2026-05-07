import { Controller, Get, Post, Body, Param, Delete, HttpCode, Patch } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CrearCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly service: CategoriasService) {}

  @Post()
  @HttpCode(201)
  create(@Body() dto: CrearCategoriaDto) {
    return this.service.Create(dto);
  }

  @Get()
  findAll() {
    return this.service.FindAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.FindOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCategoriaDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
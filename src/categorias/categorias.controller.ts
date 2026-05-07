import { Controller, Get, Post, Body, Param, Delete, HttpCode } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly service: CategoriasService) {}

  @Post()
  @HttpCode(201)
  create(@Body() dto: any) {
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

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
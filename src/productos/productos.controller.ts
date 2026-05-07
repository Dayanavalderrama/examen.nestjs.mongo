import { Controller, Get, Post, Body, Param, Delete, Query, HttpCode, Patch } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly service: ProductosService) {}

  @Post()
  @HttpCode(201)
  Create(@Body() dto: any) {
    return this.service.Create(dto);
  }

  @Get()
  FindAll(@Query('activos') activos: string) {
    return this.service.FindAll(activos === 'true');
  }

  @Get(':id')
  FindOne(@Param('id') id: string) {
    return this.service.FindOne(id);
  }

  @Patch(':id/desactivar')
  deactivate(@Param('id') id: string) {
    return this.service.deactivate(id);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
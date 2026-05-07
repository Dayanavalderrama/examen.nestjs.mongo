import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto, ProductoSchema } from './schemas/producto.schema';
import { CategoriasModule } from '../categorias/categorias.module'; // <--- Importante

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Producto.name, schema: ProductoSchema }
    ]),
    CategoriasModule, // <--- Agrega esto aquí
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose'; // Cambiamos un poco el import
import * as mongoose from 'mongoose';
import { Categoria } from '../../categorias/schemas/categoria.schema';

export type ProductoDocument = Producto & Document;

@Schema({ timestamps: true })
export class Producto {
  @Prop({ type: String, required: true, trim: true }) // <--- Agregamos type: String
  nombre!: string;

  @Prop({ type: String }) // <--- Agregamos type: String
  descripcion!: string;

  @Prop({ type: Number, required: true, min: 0 }) // <--- Agregamos type: Number
  precio!: number;

  @Prop({ type: Number, required: true, min: 0 }) // <--- Agregamos type: Number
  stock!: number;

  @Prop({ type: Boolean, default: true }) // <--- Agregamos type: Boolean
  activo!: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true })
  categoria!: Categoria;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
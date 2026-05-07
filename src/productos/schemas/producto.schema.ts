import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose'; 
import * as mongoose from 'mongoose';
import { Categoria } from '../../categorias/schemas/categoria.schema';

export type ProductoDocument = Producto & Document;

@Schema({ timestamps: true })
export class Producto {
  @Prop({ type: String, required: true, trim: true }) 
  nombre!: string;

  @Prop({ type: String }) 
  descripcion!: string;

  @Prop({ type: Number, required: true, min: 0 }) 
  precio!: number;

  @Prop({ type: Number, required: true, min: 0 }) 
  stock!: number;

  @Prop({ type: Boolean, default: true }) 
  activo!: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true })
  categoria!: Categoria;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
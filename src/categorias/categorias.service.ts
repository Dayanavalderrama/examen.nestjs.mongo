import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categoria } from './schemas/categoria.schema';
import { Producto } from '../productos/schemas/producto.schema';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectModel(Categoria.name) private categoriaModel: Model<Categoria>,
    @InjectModel(Producto.name) private productoModel: Model<Producto>,
  ) {}

  async Create(dto: any) {
    const existe = await this.categoriaModel.findOne({ nombre: dto.nombre });
    if (existe) throw new ConflictException('El nombre de la categoría ya existe');
    return new this.categoriaModel(dto).save();
  }

  async FindAll() {
    return this.categoriaModel.find();
  }

  async FindOne(id: string) {
    const res = await this.categoriaModel.findById(id);
    if (!res) throw new NotFoundException('Categoría no encontrada');
    return res;
  }

  async remove(id: string) {
    const tieneProd = await this.productoModel.findOne({ categoria: id });
    if (tieneProd) throw new ConflictException('No se puede eliminar: tiene productos asociados');
    return this.categoriaModel.findByIdAndDelete(id);
  }
}
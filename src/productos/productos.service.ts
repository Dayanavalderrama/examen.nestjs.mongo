import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto } from './schemas/producto.schema';
import { CategoriasService } from '../categorias/categorias.service';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Producto.name) private productoModel: Model<Producto>,
    private readonly categoriasService: CategoriasService,
  ) {}

  async Create(dto: any) {
    return new this.productoModel(dto).save();
  }

  async FindAll(soloActivos: boolean) {
    const filtro = soloActivos ? { activo: true } : {};
    return this.productoModel.find(filtro).populate('categoria');
  }

  async FindOne(id: string) {
    const res = await this.productoModel.findById(id).populate('categoria');
    if (!res) throw new NotFoundException('Producto no encontrado');
    return res;
  }

  async deactivate(id: string) {
    return this.productoModel.findByIdAndUpdate(id, { activo: false }, { new: true });
  }

  async remove(id: string) {
    return this.productoModel.findByIdAndDelete(id);
  }
}
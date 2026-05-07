import { IsString, IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';

export class CrearProductoDto {
  @IsString() @IsNotEmpty()
    nombre!: string;
  @IsNumber()
    Precio!: number;
  @IsNumber()
    stok!: number;
  @IsMongoId()
    categoria!: string;
}
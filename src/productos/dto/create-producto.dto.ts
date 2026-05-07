import { IsString, IsNotEmpty, IsNumber, IsMongoId, IsOptional } from 'class-validator';

export class CrearProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  precio!: number;

  @IsNumber()
  stock!: number;

  @IsMongoId()
  categoria!: string;
}
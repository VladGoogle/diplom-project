import { IsNotEmpty, IsString, IsOptional, IsPositive } from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  productImageId: number;

  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  subcategoryId: number;

  @IsNotEmpty()
  qtyInStock: number;
}

import { IsNotEmpty, IsString, IsNumber, IsInt } from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  // @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  productImageId: number;

  // @IsInt()
  @IsNotEmpty()
  categoryId: number;

  // @IsInt()
  @IsNotEmpty()
  subcategoryId: number;

  // @IsInt()
  @IsNotEmpty()
  qtyInStock: number;
}

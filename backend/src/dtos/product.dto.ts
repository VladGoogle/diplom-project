import {IsNotEmpty, IsString, IsNumber, IsInt, IsOptional} from 'class-validator';

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

  @IsOptional()
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

import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class CartItemDto {
  @IsOptional()
  @IsInt()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  productId: number;

  @IsInt()
  @IsNotEmpty()
  quantity: number;
}

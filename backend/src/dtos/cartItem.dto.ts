import { IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CartItemDto {
  @IsOptional()
  @IsInt()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  productId: number;
}

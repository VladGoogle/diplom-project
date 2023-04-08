import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class WishlistItemDto {
  @IsOptional()
  @IsInt()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  productId: number;
}

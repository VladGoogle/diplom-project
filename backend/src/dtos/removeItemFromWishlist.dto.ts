import { IsInt, IsNotEmpty } from 'class-validator';

export class RemoveItemFromWishlistDto {
  @IsInt()
  @IsNotEmpty()
  wishlistId: number;

  @IsInt()
  @IsNotEmpty()
  wishlistItemId: number;
}

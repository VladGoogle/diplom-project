import { IsInt, IsNotEmpty } from 'class-validator';

export class RemoveItemFromCartDto {
  @IsInt()
  @IsNotEmpty()
  cartId: number;

  @IsInt()
  @IsNotEmpty()
  cartItemId: number;
}

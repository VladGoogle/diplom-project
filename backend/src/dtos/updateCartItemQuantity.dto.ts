import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsInt,
    IsEnum,
    IsOptional,
} from 'class-validator';

export class UpdateCartItemQuantityDto {
    @IsNotEmpty()
    @IsInt()
    cartId: number;

    @IsNotEmpty()
    @IsInt()
    cartItemId: number;

    @IsNotEmpty()
    @IsInt()
    quantity: number;
}

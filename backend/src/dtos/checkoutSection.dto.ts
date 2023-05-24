import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CheckoutSectionDto {
  @IsInt()
  @IsNotEmpty()
  selfCheckoutId: number;
}

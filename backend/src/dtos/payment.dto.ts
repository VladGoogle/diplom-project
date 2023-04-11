import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PaymentDto {
  @IsOptional()
  @IsString()
  userId: number;

  @IsNotEmpty()
  @IsString()
  orderId: number;

  @IsOptional()
  @IsString()
  cardId: number;

  @IsOptional()
  @IsString()
  chargeToken?: string;
}

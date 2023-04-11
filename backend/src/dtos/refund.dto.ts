import { IsNotEmpty, IsString, IsNumber, IsInt } from 'class-validator';

export class RefundDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  charge: string;
}

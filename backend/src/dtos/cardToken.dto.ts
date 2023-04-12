import { IsNotEmpty, IsString, IsNumber, IsInt } from 'class-validator';
import { CurrencyEnum } from '../enums/currency.enum';

export class CardTokenDto {
  @IsNotEmpty()
  @IsString()
  number: string;

  @IsNotEmpty()
  @IsInt()
  expMonth: number;

  @IsNotEmpty()
  @IsInt()
  expYear: number;

  @IsNotEmpty()
  @IsInt()
  cvc: number;
}

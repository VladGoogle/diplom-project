import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { CurrencyEnum } from '../enums/currency.enum';

export class CardDto {
  @IsOptional()
  @IsInt()
  userId: number;

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

  @IsNotEmpty()
  @IsEnum(CurrencyEnum)
  currency: CurrencyEnum;
}

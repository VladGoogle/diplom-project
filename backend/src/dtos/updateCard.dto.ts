import { IsString, IsInt, IsEnum, IsOptional } from 'class-validator';
import { CurrencyEnum } from '../enums/currency.enum';

export class UpdateCardDto {
  @IsOptional()
  @IsString()
  number: string;

  @IsOptional()
  @IsInt()
  expMonth: number;

  @IsOptional()
  @IsInt()
  expYear: number;

  @IsOptional()
  @IsInt()
  cvc: number;

  @IsOptional()
  @IsString()
  cardToken?: string;

  @IsOptional()
  @IsString()
  cardSource?: string;

  @IsOptional()
  @IsEnum(CurrencyEnum)
  currency?: CurrencyEnum;
}

import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsEnum,
  IsOptional,
  IsIn,
} from 'class-validator';
import { RateEnum } from '../enums/rate.enum';
import { CurrencyEnum } from '../enums/currency.enum';

export class ChargeDto {
  @IsOptional()
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  currency: string;

  @IsOptional()
  @IsString()
  source: string;

  @IsOptional()
  @IsString()
  customer: string;
}

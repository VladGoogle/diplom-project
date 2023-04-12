import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsEnum,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { RateEnum } from '../enums/rate.enum';

export class DiscountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  @IsNotEmpty()
  discount_percent: number;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}

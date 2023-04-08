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

export class CommentDto {
  @IsOptional()
  @IsInt()
  userId: number;

  @IsOptional()
  @IsInt()
  productId: number;

  @IsEnum(RateEnum)
  rate: RateEnum;

  @IsString()
  @IsNotEmpty()
  text: string;
}

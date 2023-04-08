import { IsNotEmpty, IsString, IsNumber, IsInt, IsEnum } from 'class-validator';
import { RateEnum } from '../enums/rate.enum';

export class UpdateCommentDto {
  @IsEnum(RateEnum)
  rate: RateEnum;

  text: string;
}

import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class UpdateAddressDto {
  @IsOptional()
  @IsString()
  address_line1: string;

  @IsOptional()
  @IsString()
  address_line2?: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  postal_code: string;

  @IsOptional()
  @IsString()
  country: string;
}

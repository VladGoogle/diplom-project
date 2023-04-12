import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class AddressDto {
  @IsOptional()
  @IsInt()
  userId: number;

  @IsString()
  @IsNotEmpty()
  address_line1: string;

  @IsOptional()
  @IsString()
  address_line2?: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  postal_code: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}

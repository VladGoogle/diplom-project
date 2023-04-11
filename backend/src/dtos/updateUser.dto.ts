import {
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsString,
  Matches,
  IsMobilePhone,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsMobilePhone('uk-UA')
  phone?: string;
}

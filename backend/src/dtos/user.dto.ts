import {
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsString,
  Matches,
  IsMobilePhone,
  MinLength,
  MaxLength,
  IsStrongPassword,
  minLength,
} from 'class-validator';
import { Role } from '../enums/role.enum';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsStrongPassword(
    {
      minUppercase: 1,
      minLowercase: 1,
      minSymbols: 1,
      minNumbers: 1,
    },
    {
      message:
        'Password should have at least 1 uppercase letter, 1 lowercase, 1 digit and 1 special symbol',
    },
  )
  @MinLength(6)
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsMobilePhone('uk-UA')
  phone: string;

  roles: Role;
}

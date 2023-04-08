import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ResetPasswordDto {
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
  oldPassword: string;

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
  newPassword: string;

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
  confirmPassword: string;
}

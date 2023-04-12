import {
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsString,
  Matches,
  IsMobilePhone,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Role } from '../enums/role.enum';

export class ChangeUserRoleDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}

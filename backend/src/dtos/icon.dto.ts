import { IsNotEmpty, IsString } from 'class-validator';

export class IconDto {
  @IsNotEmpty()
  @IsString()
  email: string;
}

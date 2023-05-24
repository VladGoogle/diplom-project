import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SelfCheckoutDto {
  @IsString()
  @IsNotEmpty()
  city: string;
}

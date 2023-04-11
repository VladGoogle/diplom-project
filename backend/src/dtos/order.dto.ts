import { IsInt, IsOptional } from 'class-validator';

export class OrderDto {
  @IsOptional()
  @IsInt()
  userId: number;
}

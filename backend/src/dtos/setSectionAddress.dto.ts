import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class SetSectionAddressDto {
  @IsOptional()
  orderId: number;

  @IsInt()
  @IsNotEmpty()
  sectionId: number;
}

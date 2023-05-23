import { IsInt, IsNotEmpty } from 'class-validator';

export class SetSectionAddressDto {
  @IsInt()
  @IsNotEmpty()
  orderId: number;

  @IsInt()
  @IsNotEmpty()
  sectionId: number;
}

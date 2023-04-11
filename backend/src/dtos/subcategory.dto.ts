import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SubcategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  // @IsNumber()
  @IsNotEmpty()
  categoryId: any;

  subcategoryIconId: number;
}

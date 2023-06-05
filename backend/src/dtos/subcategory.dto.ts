import { IsNotEmpty, IsString } from 'class-validator';

export class SubcategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  categoryId: any;
}

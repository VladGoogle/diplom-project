import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateCategoryDto {
  name: string;

  categoryIconId: number;
}

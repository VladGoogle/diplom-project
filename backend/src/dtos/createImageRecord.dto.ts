import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateImageRecordDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  key: string;

  @IsNotEmpty()
  @IsInt()
  id: number;
}

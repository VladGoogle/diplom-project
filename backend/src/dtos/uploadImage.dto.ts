import { IsNotEmpty, IsString } from 'class-validator';

export class UploadImageDto {
  @IsNotEmpty()
  dataBuffer: Buffer;

  @IsString()
  @IsNotEmpty()
  filename: string;
}

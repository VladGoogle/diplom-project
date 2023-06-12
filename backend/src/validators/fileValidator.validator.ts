import {
  MaxFileSizeValidator as DefaultMaxFileSizeValidator,
  FileTypeValidator as DefaultFileTypeValidator,
} from '@nestjs/common';

export class MaxFileSizeValidator extends DefaultMaxFileSizeValidator {
  isValid(fileOrFiles: Express.Multer.File | Express.Multer.File[]): boolean {
    if (Array.isArray(fileOrFiles)) {
      return fileOrFiles.every((file) => super.isValid(file));
    }

    return super.isValid(fileOrFiles);
  }
}

export class FileTypeValidator extends DefaultFileTypeValidator {
  isValid(fileOrFiles: Express.Multer.File | Express.Multer.File[]): boolean {
    if (Array.isArray(fileOrFiles)) {
      return fileOrFiles.every((file) => super.isValid(file));
    }

    return super.isValid(fileOrFiles);
  }
}

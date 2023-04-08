import {
  Controller,
  Param,
  Get,
  Res,
  ParseIntPipe,
  StreamableFile,
  Post,
  UseInterceptors,
  UploadedFile,
  Req,
} from '@nestjs/common';
import { CategoryIconService } from '../services/categoryIcon.service';
import { Response } from 'express';
import { Readable } from 'stream';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {
  editFileName,
  imageFileFilter,
  maxSize,
} from '../middlewares/fileValdator.middleware';

@Controller()
export class CategoryIconController {
  constructor(private categoryIconService: CategoryIconService) {}

  @Post('categoryIcons')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCategoryIcon(@Req() req, @UploadedFile() file) {
    return await this.categoryIconService.uploadCategoryIcon(
      file.buffer,
      file.originalname,
    );
  }

  @Get('categoryIcon/:id')
  async getCategoryIconById(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryIconService.getCategoryIconById(id);
  }
}

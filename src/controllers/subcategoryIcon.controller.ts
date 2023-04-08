import {
  Controller,
  Param,
  Get,
  Res,
  ParseIntPipe,
  StreamableFile,
  Post,
  UseInterceptors,
  Req,
  UploadedFile,
} from '@nestjs/common';
import { Response } from 'express';
import { Readable } from 'stream';
import { SubcategoryIconService } from '../services/subcategoryIcon.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class SubcategoryIconController {
  constructor(private subcategoryIconService: SubcategoryIconService) {}

  @Post('subcategoryIcons')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCategoryIcon(@Req() req, @UploadedFile() file) {
    return await this.subcategoryIconService.uploadSubcategoryIcon(
      req.file.buffer,
      req.file.originalname,
    );
  }

  @Get('subcategoryIcon/:id')
  async getCategoryIconById(@Param('id', ParseIntPipe) id: number) {
    return await this.subcategoryIconService.getSubcategoryIconById(id);
  }
}

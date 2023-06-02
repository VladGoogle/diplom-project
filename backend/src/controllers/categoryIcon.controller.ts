import {
  Controller,
  Param,
  Get,
  ParseIntPipe,
  Post,
  UseInterceptors,
  UploadedFile,
  Req,
} from '@nestjs/common';
import { CategoryIconService } from '../services/categoryIcon.service';

@Controller()
export class CategoryIconController {
  constructor(private categoryIconService: CategoryIconService) {}

  @Get('categoryIcon/:id')
  async getCategoryIconById(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryIconService.getCategoryIconById(id);
  }
}

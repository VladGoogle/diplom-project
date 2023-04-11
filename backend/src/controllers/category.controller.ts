import {
  Controller,
  Body,
  Post,
  Req,
  Param,
  Get,
  Delete,
  Patch,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CategoryDto } from '../dtos/category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateCategoryDto } from '../dtos/updateCategory.dto';

@Controller()
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('category/findByName')
  async getCategoryByName(@Body() name: string) {
    return await this.categoryService.findCategoryByName(name);
  }
  @Delete('category/deleteByName')
  async deleteCategoryByName(@Body() name: string) {
    return await this.categoryService.removeCategoryByName(name);
  }

  @Post('categories')
  @UseInterceptors(FileInterceptor('file'))
  async createCategory(
    @UploadedFile() file,
    @Req() req,
    @Body() data: CategoryDto,
  ) {
    return await this.categoryService.createCategory(
      data,
      req.file.buffer,
      req.file.originalname,
    );
  }

  @Get('categories')
  async getAllCategories() {
    return await this.categoryService.findAllCategories();
  }

  @Get('category/:id')
  async getCategoryById(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryService.findCategoryById(id);
  }

  @Patch('category/:id')
  async updateCategoryInfo(
    @Body() data: UpdateCategoryDto,
    @Param('id') id: string,
  ) {
    return await this.categoryService.updateCategoryInfo(data, parseInt(id));
  }

  @Delete('user/:id')
  async deleteUserById(@Param('id') id: string) {
    return await this.categoryService.removeCategoryById(parseInt(id));
  }
}

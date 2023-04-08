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
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName } from '../middlewares/fileValdator.middleware';
import { imageFileFilter } from '../middlewares/fileValdator.middleware';
import { maxSize } from '../middlewares/fileValdator.middleware';
import { diskStorage } from 'multer';
import { SubcategoryService } from '../services/subcategory.service';
import { SubcategoryDto } from '../dtos/subcategory.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller()
export class SubcategoryController {
  constructor(private subcategoryService: SubcategoryService) {}

  @Get('subcategory/findByName')
  async getSubcategoryByName(@Body() name: string) {
    return await this.subcategoryService.findSubcategoryByName(name);
  }
  @Delete('subcategory/deleteByName')
  async deleteSubcategoryByName(@Body() name: string) {
    return await this.subcategoryService.removeSubcategoryByName(name);
  }

  @UseGuards(JwtAuthGuard)
  @Post('subcategories')
  @UseInterceptors(FileInterceptor('file'))
  async createSubcategory(
    @UploadedFile() file,
    @Req() req,
    @Body() data: SubcategoryDto,
  ) {
    return await this.subcategoryService.createSubcategory(
      {
        ...data,
        categoryId: parseInt(data.categoryId),
      },
      req.file.buffer,
      req.file.originalname,
    );
  }

  @Get('categories')
  async getAllSubcategories() {
    return await this.subcategoryService.findAllSubcategories();
  }

  @Get('subcategory/:id')
  async getSubcategoryById(@Param('id', ParseIntPipe) id: number) {
    return await this.subcategoryService.findSubcategoryById(id);
  }

  @Get('category/:id/subcategories')
  async getSubcategoriesByCategoryId(@Param('id', ParseIntPipe) id: number) {
    return await this.subcategoryService.findAllSubcategoriesByCategoryId(id);
  }

  @Patch('category/:id')
  async updateCategoryInfo(
    @Body() data: SubcategoryDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.subcategoryService.updateSubcategoryInfo(data, id);
  }

  @Delete('user/:id')
  async deleteSubcategoryById(@Param('id', ParseIntPipe) id: number) {
    return await this.subcategoryService.removeSubcategoryById(id);
  }
}

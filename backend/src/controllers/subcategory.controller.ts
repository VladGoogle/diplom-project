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
  ParseFilePipeBuilder,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SubcategoryService } from '../services/subcategory.service';
import { SubcategoryDto } from '../dtos/subcategory.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UploadImageDto } from '../dtos/uploadImage.dto';
import { MaxFileSizeValidator } from '../validators/fileValidator.validator';

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
  @UseInterceptors(FileInterceptor('image'))
  async createSubcategory(
    @UploadedFile('image',
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(jpg|jpeg|png)$/,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    image: Express.Multer.File,
    @Body() data: SubcategoryDto,
  ) {
    return await this.subcategoryService.createSubcategory(
      {
        ...data,
        categoryId: parseInt(data.categoryId),
      },
      {
        dataBuffer: image.buffer,
        filename: image.originalname,
      },
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

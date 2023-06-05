import {
  Controller,
  Body,
  Post,
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

@Controller()
export class SubcategoryController {
  constructor(private subcategoryService: SubcategoryService) {}

  @Get('subcategory/findByName')
  async getSubcategoryByName(@Body('name') name: string) {
    return await this.subcategoryService.findSubcategoryByName(name);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('subcategory/deleteByName')
  async deleteSubcategoryByName(@Body('name') name: string) {
    return await this.subcategoryService.removeSubcategoryByName(name);
  }

  @UseGuards(JwtAuthGuard)
  @Post('subcategories')
  @UseInterceptors(FileInterceptor('image'))
  async createSubcategory(
    @UploadedFile(
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

  @Get('subcategories')
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

  @UseGuards(JwtAuthGuard)
  @Patch('subcategory/:id')
  async updateSubcategoryInfo(
    @Body() data: SubcategoryDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.subcategoryService.updateSubcategoryInfo(data, id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('subcategory/:id')
  async deleteSubcategoryById(@Param('id', ParseIntPipe) id: number) {
    return await this.subcategoryService.removeSubcategoryById(id);
  }
}

import {
  Controller,
  Body,
  Post,
  Param,
  Get,
  Delete,
  Patch,
  UseInterceptors,
  ParseIntPipe,
  UseGuards,
  UploadedFiles,
  ParseFilePipeBuilder,
  HttpStatus,
  ParseFilePipe,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CategoryDto } from '../dtos/category.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UpdateCategoryDto } from '../dtos/updateCategory.dto';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import {
  FileTypeValidator,
  MaxFileSizeValidator,
} from '../validators/fileValidator.validator';

@Controller()
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('category/findByName')
  async getCategoryByName(@Body() name: string) {
    return await this.categoryService.findCategoryByName(name);
  }

  @UseGuards(RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  @Delete('category/deleteByName')
  async deleteCategoryByName(@Body() name: string) {
    return await this.categoryService.removeCategoryByName(name);
  }

  @UseGuards(RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  @Post('categories')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'icon', maxCount: 1 },
      { name: 'image', maxCount: 1 },
    ]),
  )
  async createCategory(
    @UploadedFiles()
    files: { icon?: Express.Multer.File; image?: Express.Multer.File },
    @Body() data: CategoryDto,
  ) {
    return await this.categoryService.createCategory(
      data,
      {
        dataBuffer: files.icon[0].buffer,
        filename: files.icon[0].originalname,
      },
      {
        dataBuffer: files.image[0].buffer,
        filename: files.image[0].originalname,
      },
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

  @UseGuards(RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  @Patch('category/:id')
  async updateCategoryInfo(
    @Body() data: UpdateCategoryDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.categoryService.updateCategoryInfo(data, id);
  }

  @Delete('user/:id')
  async deleteCategoryById(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryService.removeCategoryById(id);
  }
}

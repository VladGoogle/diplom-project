import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CategoryQueries } from '../queries/category.queries';
import { CategoryDto } from '../dtos/category.dto';
import { CategoryIconService } from './categoryIcon.service';
import { Category } from '@prisma/client';
import { UpdateCategoryDto } from '../dtos/updateCategory.dto';

@Injectable()
export class CategoryService {
  constructor(
    private prisma: PrismaService,
    private categoryQueries: CategoryQueries,
    private categoryIconService: CategoryIconService,
  ) {}

  async createCategory(
    data: CategoryDto,
    buffer: Buffer,
    filename: string,
  ): Promise<Category> {
    const icon = await this.categoryIconService.uploadCategoryIcon(
      buffer,
      filename,
    );
    return await this.categoryQueries.createCategory({
      ...data,
      categoryIconId: icon.id,
    });
  }

  async findCategoryById(id: number) {
    return await this.categoryQueries.findCategoryById(id);
  }

  async findCategoryByName(name: string) {
    return await this.categoryQueries.findCategoryByName(name);
  }

  async findAllCategories() {
    return await this.categoryQueries.findAllCategories();
  }

  async removeCategoryById(id: number) {
    return await this.categoryQueries.removeCategoryById(id);
  }

  async removeCategoryByName(name: string) {
    return await this.categoryQueries.removeCategoryByName(name);
  }

  async updateCategoryInfo(data: UpdateCategoryDto, id: number) {
    return await this.categoryQueries.updateCategoryInfo(data, id);
  }
}
